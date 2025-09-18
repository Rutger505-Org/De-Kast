import { SignOutButton } from "@/app/_components/sign-out-button";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div>
      <header className={"p-4"}>
        <SignOutButton />
      </header>

      {children}
    </div>
  );
}
