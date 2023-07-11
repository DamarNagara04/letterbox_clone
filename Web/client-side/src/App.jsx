import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./routers";
import store from "./stores";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
