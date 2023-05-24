import { Suspense } from 'react'
import { Input } from '@/components/Input'
import { PostList } from '@/components/PostList'
import { UserCard } from '@/components/UserCard'

export default async function Home() {
  return (
    <main className="m-auto mb-8 max-w-[864px]">
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Server Component */}
        <UserCard />
      </Suspense>

      <section className="mt-18">
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>

          <p className="text-sm text-base-span">6 publicações</p>
        </div>

        <Input type="search" placeholder="Buscar conteúdo" />

        <PostList />
      </section>
    </main>
  )
}
