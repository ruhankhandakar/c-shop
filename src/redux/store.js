import { createStore } from "redux";
import { persistStore } from "redux-persist";

import reducers from "./reducers";

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(reducers);
}
const persistor = persistStore(store);

export { store, persistor };
