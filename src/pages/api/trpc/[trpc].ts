import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@backend/routers'
import { createContext } from '@backend/helpers/createContext'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError: (err) => {
    if (err.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong:', err)
    } else {
      console.error(err)
    }
  },
})
