'use client'

import { Input } from '@/components/Input'
import { PostList } from '@/components/PostList'
import { UserCard } from '@/components/UserCard'
import { Post } from '@/shared/dtos/post'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/shared/services/api/requests/post'

export default function Home() {
  const { data: posts } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => getPosts().then((response) => response.data),
    retry: false,
  })

  return (
    <main className="m-auto mb-8 max-w-[864px]">
      <UserCard />

      <section className="mt-18">
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>

          <p className="text-sm text-base-span">6 publicações</p>
        </div>

        <Input type="search" placeholder="Buscar conteúdo" />

        <PostList posts={posts || []} />
      </section>
    </main>
  )
}
