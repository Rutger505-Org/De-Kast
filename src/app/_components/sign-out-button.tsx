"use client";

import { signOut } from "@/client/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        })
      }
    >
      Uitloggen
    </Button>
  );
}
