'use client'

import {
  CalendarDays,
  ChevronLeftIcon,
  ExternalLink,
  Github,
  MessageCircle,
} from 'lucide-react'
import { Link } from './Link'
import { Post } from '@/shared/dtos/post'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <section className="-mt-20 flex w-[864px] gap-8 rounded-lg bg-base-profile p-8 pl-10 drop-shadow-md">
      <div className="flex w-full flex-col">
        <div className="mb-5 flex w-full justify-between">
          <Link href="/">
            <ChevronLeftIcon size="12" /> Voltar
          </Link>

          <Link href={post.html_url} target="_blank">
            Ver no github
            <ExternalLink size="12" />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-base-title">{post.title}</h2>

        <div className="mt-2 flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <Github className="text-base-label" size="18" />
            {post.user.login}
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <CalendarDays className="text-base-label" size="18" />
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <MessageCircle className="text-base-label" size="18" />
            {post.comments} comentários
          </span>
        </div>
      </div>
    </section>
  )
}
