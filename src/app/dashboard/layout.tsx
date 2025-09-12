import { SignOutButton } from "@/app/_components/sign-out-button";
import { type ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <header className={"p-4"}>
        <SignOutButton />
      </header>

      {children}
    </div>
  );
}
