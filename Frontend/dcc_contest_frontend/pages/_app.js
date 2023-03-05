import "../styles/globals.css";
import "../styles/EditorSkeleton.css";
import "../styles/SideNav.css";
import "../styles/test.css";
import { Provider } from "react-redux";
import store from "../store/baseStore";
import Auth from "../components/Auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Provider>
    </>
  );
}
