import React, { useEffect } from "react";

import { useAuth } from "@/hooks/auth.hook";
import { useLoginWithSocialMutation } from "@/services/profile-service";
import {
  useNavigate,
  //  useParams, useSearchParams
} from "react-router-dom";
import { Spinner } from "@/components/common/spinner.component";

const GoogleCallbackHandler: React.FC = () => {
  // const searchParams = useSearchParams();
  const router = useNavigate();
  // const provider = useParams();
  const { authenticate } = useAuth();

  const { mutateAsync: loginWithSocial } = useLoginWithSocialMutation();

  useEffect(() => {
    // if (!searchParams) return;

    fetchUserCredentials();
  }, []);

  const fetchUserCredentials = async () => {
    await loginWithSocial()
      .then((response) => {
        if (response?.data) {
          authenticate(response?.data);
          router("/");
        } else {
          throw new Error("Failed to login with social");
        }
      })
      .catch(() => {
        router("/login")
        // console.log(err, "err");
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default GoogleCallbackHandler;
