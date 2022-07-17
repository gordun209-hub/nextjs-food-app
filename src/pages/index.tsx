import { trpc } from '@utils/trpc'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { invalidateQueries } = trpc.useContext()
  const { data, isLoading } = trpc.useQuery(['post_all'])

  const { mutate } = trpc.useMutation(['post_add'], {
    onSuccess() {
      invalidateQueries('post_all')
    },
  })

  const router = useRouter()
  const { t, lang } = useTranslation('common')

  const changeLang = (e: any) => {
    router.push(router.asPath, router.asPath, {
      locale: e.target.value,
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const description = e.target.description.value
    mutate({ description })
  }

  return (
    <div>
      <nav className="bg-zinc-400">
        <select defaultValue={lang} onChange={changeLang}>
          {router?.locales.map((locale, idx) => (
            <option key={idx} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </nav>
      <h2>{t('title')}</h2>

      <h1 className="text-2xl color-zinc-600">Add Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="New post" />
        <button type="submit">Add </button>
      </form>

      <h1 className="text-2xl color-zinc-600">Posts Here</h1>
      <div>
        {data?.map((post) => (
          <div key={post.id}>
            <br />
            {post.description}
          </div>
        ))}
      </div>
    </div>
  )
}
