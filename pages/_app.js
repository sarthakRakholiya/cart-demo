// ***** start - imports from files *****
import { useStore, wrapper } from "@/hooks/useStore";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";
// ***** end - imports from files *****

function App({ Component, pageProps }) {

  // ***** start - define variable *****
  const store = useStore();
  // ***** end - define variable *****

  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(App);