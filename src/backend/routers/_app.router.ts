import { postRouter } from '@backend/routers/post.router'
import { authRouter } from '@backend/routers/auth.router'
import { createRouter } from '@backend/helpers/createRouter'
import { TRPCError } from '@trpc/server'

export const appRouter = createRouter()
  .query('init', {
    resolve() {
      return 'Initialize app 🥳'
    },
  })
  .merge('auth', authRouter)
  .middleware(({ ctx, next }) => {
    if (ctx.user) {
      return next()
    }
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  })
  .merge('post', postRouter)

export type AppRouter = typeof appRouter
