'use client'

/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import { PostCard } from '@/components/PostCard'
import { getPost } from '@/shared/services/api/requests/post'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import './markdown.css'
import { useQuery } from '@tanstack/react-query'
import { RenderIf } from '@/components/RenderIf'

interface PostProps {
  params: { id: string }
}

export default async function Post({ params }: PostProps) {
  const { data: post, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: async () =>
      getPost(Number(params.id)).then((response) => response.data),
    enabled: !!params.id,
    retry: false,
  })

  return (
    <main className="m-auto mb-8 max-w-[864px]">
      <RenderIf condition={!isLoading}>
        <PostCard post={post!} />

        <section className="px-8 py-10 text-base-text">
          <ReactMarkdown
            children={post!.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </section>
      </RenderIf>
    </main>
  )
}
