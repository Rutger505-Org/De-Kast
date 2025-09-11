"use client";

import {signIn, useSession} from "@/client/auth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";

export default function SignInForm() {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
      });
      if (response?.error) {
        throw new Error(response.error.message ?? response.error.statusText);
      }
    },
  });

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Your password"
        />
      </div>

      {mutation.isError && (
        <div className="text-sm text-red-600">
          {mutation.error?.message ?? "Sign in failed"}
        </div>
      )}

      <Button type="submit" disabled={mutation.isPending} className="w-full">
        {mutation.isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
