'use client'

import { z } from 'zod'
import { Input } from '@/components/Input'
import { PostList } from '@/components/PostList'
import { UserCard } from '@/components/UserCard'
import { Post } from '@/shared/dtos/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/shared/services/api/requests/post'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const searchSchema = z.object({
  search: z.string().default(''),
})

type SearchType = z.infer<typeof searchSchema>

export default function Home() {
  const [query, setQuery] = useState('')

  const { register, handleSubmit } = useForm<SearchType>({
    resolver: zodResolver(searchSchema),
  })

  const { data: posts } = useQuery<Post[]>({
    queryKey: ['posts', query],
    queryFn: async () =>
      getPosts(query).then((response) => response.data.items),
    retry: false,
  })

  function handleSearch({ search }: SearchType) {
    setQuery(search)
  }

  return (
    <main className="m-auto mb-8 max-w-[864px]">
      <UserCard />

      <section className="mt-18">
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>

          <p className="text-sm text-base-span">
            {posts?.length || 0} publicações
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSearch)}>
          <Input
            type="search"
            {...register('search')}
            placeholder="Buscar conteúdo"
          />
        </form>

        <PostList posts={posts || []} />
      </section>
    </main>
  )
}
