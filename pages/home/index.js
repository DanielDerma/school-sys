import Blog from "./BlogLayout/Blog";
import { useAuth } from "../../contexts/AuthContext";

export default function index() {
  return (
    <>
      <Blog />
    </>
  );
}
