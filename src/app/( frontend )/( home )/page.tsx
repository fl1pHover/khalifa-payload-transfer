import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import FeaturedBrand from '@/components/features/featured-brand'
import Hero from '@/components/features/hero'
import Marquee from '@/components/shared/marquee'
import Suggestion from '@/components/shared/suggestion'
import { FEATURED_BRAND } from '@/lib/constants'
import config from '@/payload.config'

export default async function Home() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  console.log(user)
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      {!user && <h1>Log hiigeegu bnshu.</h1>}
      {user && <h1>Welcome back, {user.email}</h1>}
      <Hero />
      <Marquee />
      {FEATURED_BRAND.map((brand) => (
        <FeaturedBrand featured={brand} key={brand.id} {...brand} />
      ))}
      <Suggestion />
    </div>
  )
}
