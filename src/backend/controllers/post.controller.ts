class Contollers {
  async getAll({ ctx }: { ctx: any }) {
    const posts = await ctx.prisma.post.findMany()
    if (posts) return posts
    return null
  }

  async add({ ctx, input }: { ctx: any; input: any }) {
    const post = await ctx.prisma.post.create({
      data: {
        ...input,
      },
    })
    if (post) return post
    return null
  }
}

export default new Contollers()
