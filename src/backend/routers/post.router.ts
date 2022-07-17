import { createRouter } from '@backend/helpers/createRouter'
import controller from '@backend/controllers/post.controller'
import { z } from 'zod'

export const postRouter = createRouter()
  .query('_all', {
    async resolve({ ctx }) {
      return controller.getAll({ ctx })
    },
  })

  .mutation('_add', {
    input: z
      .object({
        description: z.string().nullish(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      return controller.add({ ctx, input })
    },
  })

export type PostRouter = typeof postRouter
