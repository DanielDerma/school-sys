import Blog from "./BlogLayout/Blog";
import { useAuth } from "../../contexts/AuthContext";

export default function index() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <>
      <Blog stateUser={currentUser} />
    </>
  );
}
