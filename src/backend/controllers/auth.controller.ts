import { Context } from '@backend/helpers/createContext'

class Contollers {
  async signin({ ctx, input }: { ctx: Context; input: any }) {
    const user = await ctx.prisma.user.findMany({
      where: { username: input.username },
    })
  }

  async signup({ ctx, input }: { ctx: Context; input: any }) {
    const foundUser = await ctx.prisma.user.findMany({
      where: { username: input.username },
    })
    if (foundUser.length > 0) {
      throw new Error('User already exists')
    }
    const user = await ctx.prisma.user.create({
      data: {
        username: input.username,
        password: input.password,
      },
    })
  }

  async signout({ ctx }: { ctx: Context }) {
    ctx.user = null
  }
}

export default new Contollers()
