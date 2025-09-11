import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const plainPassword = "password";

await Promise.all(
  [
    {
      id: "1",
      name: "One time",
      email: "onetime@example.com",
    },
    {
      id: "2",
      name: "One time with Addon",
      email: "onetimewithaddon@example.com",
    },
    {
      id: "3",
      name: "Two time",
      email: "twotimes@example.com",
    },
    {
      id: "4",
      name: "Two time with Addon",
      email: "twotimeswithaddon@example.com",
    },
    {
      id: "5",
      name: "Unlimited",
      email: "unlimited@example.com",
    },
    {
      id: "6",
      name: "Unlimited with addon",
      email: "unlimitedwithaddon@example.com",
    },
  ].map(async (u) => {
    const [foundUser] = await db
      .select()
      .from(user)
      .where(eq(user.email, u.email));

    if (foundUser) {
      console.log(`⚠️ User already exists: ${u.name} (${u.email}) skipping`);
      return;
    }

    await auth.api.signUpEmail({
      body: {
        ...u,
        password: plainPassword,
      },
    });

    console.log(
      `✅ User seeded: ${u.name} (${u.email}) with password "${plainPassword}"`,
    );
  }),
);
