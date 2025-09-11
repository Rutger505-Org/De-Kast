import { db } from "@/server/db";
import { account, user } from "@/server/db/schema";
import bcrypt from "bcryptjs"; // install: bun add bcryptjs OR npm install bcryptjs
import { randomUUID } from "crypto";

async function seed() {
  const userId = randomUUID();

  // Maybe hardcoded id to prevent double seed?

  // hash the password with bcrypt
  const plainPassword = "supersecret123";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // create the user
  await db.insert(user).values({
    id: userId,
    name: "Alice",
    email: "alice@example.com",
    emailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // link an account with hashed password
  await db.insert(account).values({
    id: randomUUID(),
    accountId: "alice-local",
    providerId: "credentials", // must match how you configured better-auth
    userId,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(
    `✅ User seeded: alice@example.com with password "${plainPassword}"`,
  );
}

seed().then(() => {
  console.log("🌱 Seeding complete");
  process.exit(0);
});
