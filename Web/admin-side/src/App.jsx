import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import { RouterProvider } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./routers";

import store from "./stores";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
    </>
  );
}

export default App;
