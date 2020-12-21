import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import indexState from '../store/index';
import postState from '../store/post';
import comState from '../store/com';
import infoState from '../store/info';

const allState = Object.assign(indexState, postState, comState);

const initialState = Object.keys(allState).map(key => {
    return {
        [key]: allState[key]()['default']
    }
})

// 这里暴露出的是创建store的工厂方法
// 每次渲染都需要重新创建一个store实例
// 防止服务端一直复用旧实例 无法和客户端状态同步
export default function initializeStore(state) {
    const store = createStore(
        (state = initialState, action) => {
            let backState = null;
            Object.keys(allState).forEach(item => {
                const fn = allState[item](action);
                if (action.type === fn['type']) {
                    backState = fn['data'];
                }
            })
            return backState? backState: state;
        },
        Object.assign({}, initialState, state),
        applyMiddleware(ReduxThunk)
    )
    return store;
}
