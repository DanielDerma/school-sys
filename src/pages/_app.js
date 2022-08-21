import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import DefaultLayout from "../components/NormalLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
