"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Maak een afspraak met een personal trainer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input required />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input required />
            </div>

            <Button type="submit" className="w-full"></Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
