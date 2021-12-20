import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";

export default function SiiMain() {
  const { currentUser, logout } = useAuth();
  console.log(currentUser);
  return <>soy SiiMain itnki</>;
}
SiiMain.Layout = Layout;
