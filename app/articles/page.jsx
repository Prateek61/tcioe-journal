import ClientPage from './page.client'
import { getArticles } from '@/components/utils'

const page = async () => {
  const articles = await getArticles()

  return (
    <ClientPage articles={articles} />
  )
}

export default page