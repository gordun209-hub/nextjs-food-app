import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@backend/helpers/prisma'
import jwt from 'jsonwebtoken'

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  let user = null

  if (req.headers.AUTHORIZATION_TOKEN) {
    const token = req.headers.AUTHORIZATION_TOKEN as string
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any
    user = decoded ? decoded : null
  }

  return {
    req,
    res,
    prisma,
    user: 'mithat' as null | string, // test user
  }
}

export type Context = ReturnType<typeof createContext>
