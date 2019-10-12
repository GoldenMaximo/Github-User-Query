import { createStore } from "redux";

import reducers from "./Ducks";

const Store = createStore(reducers);

export default Store;