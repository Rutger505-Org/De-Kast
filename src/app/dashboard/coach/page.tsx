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
              <Label>Kies een tijd</Label>
              <Input type="time" required />
            </div>
            <div>
              <Label>Kies een datum</Label>
              <Input type="date" required />
            </div>
            <a href="/dashboard">
              <Button type="submit" className="w-full">
                Maak afspraak
              </Button>
            </a>
          </form>
          <a href="/dashboard">
            <Button>Annuleer</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
