import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

// Leaving this as example... This is unused.
export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({}) => {
    // const posts = await ctx.db.query.post.findMany({
    //   orderBy: (post, { desc }) => [desc(post.createdAt)],
    // });

    return null;
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({}) => {
      // await ctx.db.insert(post).values({
      //   name: input.name,
      //   createdById: ctx.session.user.id,
      // });
    }),

  update: protectedProcedure
    .input(z.object({ id: z.number(), newName: z.string().min(1) }))
    .mutation(async ({}) => {
      // await ctx.db
      //   .update(post)
      //   .set({ name: input.newName })
      //   .where(eq(post.id, input.id));
    }),
});
