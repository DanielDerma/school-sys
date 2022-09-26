import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const useAuthPage = (localPage) => {
  const [pageLoading, setPageLoading] = useState(true);
  const { currentUser, pages } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("entre");
    !currentUser && router.replace("/log/login");

    if (currentUser) {
      if (!(localPage === pages || localPage === "Account")) {
        router.replace("/app/account");
      } else {
        setPageLoading(false);
      }
    }
  }, [currentUser, router]);

  return { currentUser, pageLoading };
};

export default useAuthPage;
