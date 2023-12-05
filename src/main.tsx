import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import "./localization/i18n";

// import App from "src/App";
import App from "./App";
// import Loader from "./components/Loader/Loader";
import Loader from "components/Loader/Loader";

import { GlobalStyles, theme } from "styles/index.js";
import { persistor, store } from "./redux/store";
// import { persistor, store } from "src/redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);