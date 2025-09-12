import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { courses, subscription, user } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const plainPassword = "password";

const usersToSeed = [
  {
    id: "1",
    name: "One time",
    email: "onetime@example.com",
    subscriptionId: "one",
  },
  {
    id: "2",
    name: "One time with Addon",
    email: "onetimewithaddon@example.com",
    subscriptionId: "one_addon",
  },
  {
    id: "3",
    name: "Two time",
    email: "twotimes@example.com",
    subscriptionId: "two",
  },
  {
    id: "4",
    name: "Two time with Addon",
    email: "twotimeswithaddon@example.com",
    subscriptionId: "two_addon",
  },
  {
    id: "5",
    name: "Unlimited",
    email: "unlimited@example.com",
    subscriptionId: "unlimited",
  },
  {
    id: "6",
    name: "Unlimited with addon",
    email: "unlimitedwithaddon@example.com",
    subscriptionId: "unlimited_addon",
  },
];

const subscriptionsToSeed = [
  {
    id: "one",
    name: "One time",
    sessionsPerWeek: 1,
    coursesAccess: false,
  },
  {
    id: "one_addon",
    name: "One time with Addon",
    sessionsPerWeek: 1,
    coursesAccess: true,
  },
  {
    id: "two",
    name: "Two time",
    sessionsPerWeek: 2,
    coursesAccess: false,
  },
  {
    id: "two_addon",
    name: "Two time with Addon",
    sessionsPerWeek: 2,
    coursesAccess: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    sessionsPerWeek: 999,
    coursesAccess: false,
  },
  {
    id: "unlimited_addon",
    name: "Unlimited with Addon",
    sessionsPerWeek: 999,
    coursesAccess: true,
  },
];

const coursesToSeed = [
  {
    id: "yoga",
    name: "Yoga",
    weekDay: 1, // Monday
    timeStart: "10:00",
    timeEnd: "11:00",
  },
  {
    id: "pilates",
    name: "Pilates",
    weekDay: 3, // Wednesday
    timeStart: "18:00",
    timeEnd: "19:00",
  },
  {
    id: "pole_dancing",
    name: "Paaldansen",
    weekDay: 5, // Friday
    timeStart: "20:00",
    timeEnd: "21:30",
  },
];

for (const sub of subscriptionsToSeed) {
  const [foundSub] = await db
    .select()
    .from(subscription)
    .where(eq(subscription.id, sub.id));

  if (!foundSub) {
    await db.insert(subscription).values(sub);
    console.log(`✅ Subscription created: ${sub.name}`);
  } else {
    console.log(`⚠️ Subscription exists: ${sub.name}`);
  }
}

for (const course of coursesToSeed) {
  const [foundCourse] = await db
    .select()
    .from(courses)
    .where(eq(courses.id, course.id));

  if (!foundCourse) {
    await db.insert(courses).values(course);
    console.log(`✅ Course created: ${course.name}`);
  } else {
    console.log(`⚠️ Course exists: ${course.name}`);
  }
}

for (const u of usersToSeed) {
  const [foundUser] = await db
    .select()
    .from(user)
    .where(eq(user.email, u.email));

  if (foundUser) {
    console.log(`⚠️ User already exists: ${u.name} (${u.email}) skipping`);
    continue;
  }

  await auth.api.signUpEmail({
    body: {
      ...u,
      password: plainPassword,
    },
  });

  await db
    .update(user)
    .set({ subscriptionId: u.subscriptionId })
    .where(eq(user.email, u.email));

  console.log(
    `✅ User seeded: ${u.name} (${u.email}) with subscription '${u.subscriptionId}' and password "${plainPassword}"`,
  );
}
