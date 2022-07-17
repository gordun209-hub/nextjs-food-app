import { router } from '@trpc/server'
import { Context } from './createContext'

export function createRouter() {
  return router<Context>()
}
