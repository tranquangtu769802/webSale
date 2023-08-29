import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../Reducer/RootReducer";
import thunk from "redux-thunk";

//setting khi cai redux thunk nay
const middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export let storeRedux = createStore(rootReducer, middleware);