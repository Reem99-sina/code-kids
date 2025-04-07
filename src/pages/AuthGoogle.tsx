import React, { useEffect } from "react";

import { useAuth } from "@/hooks/auth.hook";
import { useLoginWithSocialMutation } from "@/services/profile-service";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Spinner } from "@/components/common/spinner.component";

const GoogleCallbackHandler: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useNavigate();
  const provider = useParams();
  const { authenticate } = useAuth();

  const { mutateAsync: loginWithSocial } = useLoginWithSocialMutation("google");

  useEffect(() => {
    // if (!searchParams) return;

    fetchUserCredentials();
  }, [router, searchParams, provider]);

  const fetchUserCredentials = async () => {
    try {
      const response = await loginWithSocial();
      if (response?.data) {
        authenticate(response?.data);
        router("/");
      } else {
        throw new Error("Failed to login with social");
      }
    } catch  {
      router("/login");
    }
  };

  return <div className="h-screen w-screen flex items-center justify-center"><Spinner /></div>;
};

export default GoogleCallbackHandler;
