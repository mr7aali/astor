import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { middleware } from "./middleware/middleware";
import { rootReducer } from "./Reducers/rootReducer";



const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(middleware, thunk))
);

export default store;