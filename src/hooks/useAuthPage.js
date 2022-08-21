import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const useAuthPage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser, router]);

  return currentUser;
};

export default useAuthPage;
