'use client'

import { Post } from '@/shared/dtos/post'
import Link from 'next/link'

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      {posts.map((post) => (
        <Link href={`/post/${post.number}`} key={post.id}>
          <article className="h-max-64 h-64 w-104 cursor-pointer rounded-lg border-2 border-transparent bg-base-post p-8 transition hover:border-base-label">
            <header className="mb-5 flex justify-center ">
              <h1 className="w-3/4 text-justify text-xl font-bold text-base-title">
                {post.title}
              </h1>

              <p className="mt-1 w-1/4 text-end text-sm text-base-span">
                Há 1 dia
              </p>
            </header>

            <p className="text-justify text-base text-base-text">
              {post.body.substring(0, 223)}
            </p>
          </article>
        </Link>
      ))}
    </div>
  )
}
