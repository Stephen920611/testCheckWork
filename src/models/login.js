import {routerRedux} from 'dva/router';
import {stringify} from 'qs';
import {accountLogin, getFakeCaptcha} from '@/services/api';
import {setAuthority} from '@/utils/authority';
import {getPageQuery} from '@/utils/utils';
import {reloadAuthorized} from '@/utils/Authorized';
import T from '../utils/T';

export default {
    namespace: 'login',

    state: {
        status: undefined,
        loginInfo: {},
    },

    effects: {
        * login({payload}, {call, put}) {
            const response = yield call(accountLogin, payload);
            //先默认清除登录信息
            T.auth.clearLoginInfo();
            //登录失败提示信息
            if(response.result === 'false'){
                T.prompt.error(response.message)
            }
            //如果是管理员账户，那就给最高权限
            if(response.user.userCode === 'system'){
                response["currentAuthority"] = "admin";
            }
            //类似于reducer，
            yield put({
                type: 'changeLoginStatus',
                payload: response,
            });
            // Login successfully
            if (response.result === "true") {
                //将成功后的响应放到localStorage
                T.auth.setLoginInfo(response);
                reloadAuthorized();
                //window.location.href：http://localhost:8000/user/login
                const urlParams = new URL(window.location.href);
                const params = getPageQuery();
                let {redirect} = params;
                if (redirect) {
                    const redirectUrlParams = new URL(redirect);
                    if (redirectUrlParams.origin === urlParams.origin) {
                        redirect = redirect.substr(urlParams.origin.length);
                        if (window.routerBase !== '/') {
                            redirect = redirect.replace(window.routerBase, '/');
                        }
                        if (redirect.match(/^\/.*#/)) {
                            redirect = redirect.substr(redirect.indexOf('#') + 1);
                        }
                    } else {
                        redirect = null;
                    }
                }
                yield put(routerRedux.replace({
                    pathname:redirect || '/',
                    loginInfo: response
                }));
            }
        },

        * getCaptcha({payload}, {call}) {
            yield call(getFakeCaptcha, payload);
        },

        * logout(_, {put}) {
            yield put({
                type: 'changeLoginStatus',
                payload: {
                    status: false,
                    currentAuthority: 'guest',
                },
            });
            reloadAuthorized();
            const {redirect} = getPageQuery();
            // redirect
            if (window.location.pathname !== '/user/login' && !redirect) {
                T.auth.clearLoginInfo();
                T.storage.clearStorage('taskId');
                T.storage.clearStorage('HtmlType');
                yield put(
                    routerRedux.replace({
                        pathname: '/user/login',
                        search: stringify({
                            redirect: window.location.href,
                        }),
                    })
                );
            }
        },
    },

    reducers: {
        changeLoginStatus(state, {payload}) {
            setAuthority(payload.currentAuthority);
            return {
                ...state,
                status: payload.status,
                type: payload.type,
            };
        },
    },
};
