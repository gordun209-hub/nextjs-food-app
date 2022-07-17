import { createRouter } from '@backend/helpers/createRouter'
import { z } from 'zod'
import controller from '@backend/controllers/auth.controller'

export const authRouter = createRouter()
  //
  .mutation('_signin', {
    resolve({ ctx, input }) {
      return controller.signin({ ctx, input })
    },
  })

  .mutation('_signup', {
    resolve({ ctx, input }) {
      return controller.signup({ ctx, input })
    },
  })

  .mutation('_signout', {
    resolve({ ctx }) {
      return controller.signout({ ctx })
    },
  })


