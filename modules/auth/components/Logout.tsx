"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Logout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <span
      role="button"
      tabIndex={0}
      className={className}
      onClick={() =>
        signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
            },
          },
        })
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/login");
              },
            },
          });
        }
      }}
    >
      {children}
    </span>
  );
};

export default Logout;
