import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";

export default function Editor() {
  const { currentUser, logout } = useAuth();

  return <>soy editor</>;
}
Editor.Layout = Layout;
