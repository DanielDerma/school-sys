import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";

export default function Editor() {
  const { currentUser, logout } = useAuth();
  console.log(currentUser);

  return <>soy Editor itnki</>;
}
Editor.Layout = Layout;
