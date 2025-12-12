import { Button } from "@/components/ui/button";
import Logout from "@/modules/auth/components/Logout";
import { requireAuth } from "@/modules/utils/auth-utils";
import Image from "next/image";

export default async function Home() {
  await requireAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logout>
        <Button className="cursor-pointer">Logout</Button>
      </Logout>
    </div>
  );
}
