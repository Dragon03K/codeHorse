import LoginUI from "@/modules/auth/components/LoginUI";
import { requireUnAuth } from "@/modules/utils/auth-utils";

const LoginPage = async () => {
  await requireUnAuth();
  return (
    <div>
      <LoginUI />
    </div>
  );
};

export default LoginPage;
