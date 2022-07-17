import { trpc } from '@utils/trpc'

const login = () => {
  const { mutate } = trpc.useMutation(['auth_signin'], {
    onSuccess(data) {
      alert(data)
    },
    onError(err) {
      alert(err)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-red-500 w-40">
      <input placeholder="username" type="text" name="username" />
      <input placeholder="password" type="password" name="password" />
      <button type="submit">sign in / sign up</button>
    </form>
  )
}

export default login
