import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import DefaultLayout from "../components/NormalLayout";
// change between layout with props e.j
// 1. Dashboard
// 2. LogIn/Register /log
// 3. Blog /blog

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
