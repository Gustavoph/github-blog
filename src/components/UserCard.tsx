'use client'

import Image from 'next/image'
import { Building2, ExternalLink, Github, Users2 } from 'lucide-react'

import { Link } from './Link'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/shared/services/api/requests/user'
import { RenderIf } from './RenderIf'

export function UserCard() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => getUser().then((response) => response.data),
  })

  return (
    <section className="-mt-20 flex w-[864px] gap-8 rounded-lg bg-base-profile p-8 pl-10 drop-shadow-md">
      <RenderIf condition={!isLoading}>
        <Image
          src={user?.avatar_url || ''}
          alt="Foto perfil usuário"
          width={148}
          height={148}
          className="rounded-lg bg-white"
        />

        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <h2 className="text-2xl font-bold text-base-title">{user?.name}</h2>

            <Link href={user?.html_url || ''} target="_blank">
              Github
              <ExternalLink size="12" />
            </Link>
          </div>

          <p className="mb-6 text-base text-base-text">{user?.bio}</p>

          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-base-subtitle">
              <Github className="text-base-label" size="18" />
              {user?.login}
            </span>

            <span className="flex items-center gap-2 text-base-subtitle">
              <Building2 className="text-base-label" size="18" />
              {user?.company}
            </span>

            <span className="flex items-center gap-2 text-base-subtitle">
              <Users2 className="text-base-label" size="18" />
              {user?.followers} seguidores
            </span>
          </div>
        </div>
      </RenderIf>
    </section>
  )
}
