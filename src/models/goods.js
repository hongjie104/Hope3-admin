import { message } from 'antd';
import { find, detail, update } from '../services/goods';

export default {
    namespace: 'goods',
    state: {
        loading: false,
        findFormValue: {
            name: null,
        },
        listData: {
            list: [],
            pagination: {
                total: 0,
                current: 0,
            },
        },
        detail: null,
        platform: [],
    },
    effects: {
        *find({ payload }, { call, put }) {
            yield put({
                type: 'changeStyleListLoading',
                payload: true,
            });
            yield put({
                type: 'createFindFormValue',
                payload: {
                    name: payload.name,
                },
            });
            if (payload.resetFormValue) {
                yield put({
                    type: 'resetedFormValue',
                });
            }
            const response = yield call(find, payload);
            if (response.success) {
                yield put({
                    type: 'setListData',
                    payload: response.data,
                });
            }
            yield put({
                type: 'changeStyleListLoading',
                payload: false,
            });
        },
        *detail({ payload, callback }, { call, put }) {
            const response = yield call(detail, payload);
            if (response.success) {
                yield put({
                    type: 'setDetail',
                    payload: response.data,
                });
                callback && callback();
            } else {
                message.error(response.data);
            }
        },
        *update({ payload, callback }, { call }) {
            const response = yield call(update, payload);
            if (response.success) {
                message.success('保存成功');
                callback && callback();
            }
        },
        *clearDetail(_, { put }) {
            yield put({
                type: 'setDetail',
                payload: null,
            });
        },
    },
    reducers: {
        changeStyleListLoading(state, { payload }) {
            return {
                ...state,
                loading: payload,
            };
        },
        createFindFormValue(state, { payload }) {
            return {
                ...state,
                findFormValue: {
                    ...payload,
                },
            };
        },
        setListData(state, { payload }) {
            return {
                ...state,
                listData: {
                    ...payload,
                },
            };
        },
        resetedFormValue(state) {
            return {
                ...state,
                findFormValue: {
                    name: null,
                },
            };
        },
        setDetail(state, { payload }) {
            if (payload) {
                return {
                    ...state,
                    detail: payload.goods,
                    platform: payload.platform,
                };
            }
            return {
                ...state,
                detail: null,
            };
        },
        // setSubCategory(state, { payload }) {
        //     return {
        //         ...state,
        //         subCategory: payload,
        //     };
        // },
    },
};