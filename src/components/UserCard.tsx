import Image from 'next/image'
import { Building2, ExternalLink, Github, Users2 } from 'lucide-react'

import { Link } from './Link'

export function UserCard() {
  return (
    <section className="-mt-20 flex h-53 w-[864px] gap-8 rounded-lg bg-base-profile p-8 pl-10 drop-shadow-md">
      <Image
        src="/user-photo.png"
        alt="Foto perfil usuário"
        width={148}
        height={148}
        className="rounded-lg bg-white"
      />

      <div className="flex flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-2xl font-bold text-base-title">
            Gustavo Oliveira
          </h2>

          <Link href="/">
            Github
            <ExternalLink size="12" />
          </Link>
        </div>

        <p className="mb-6 text-base text-base-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vero cumque neque eos voluptatibus voluptates nisi! Eum inventore
          perspiciatis id.
        </p>

        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <Github className="text-base-label" size="18" />
            gustavoph
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <Building2 className="text-base-label" size="18" />
            beresolution
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <Users2 className="text-base-label" size="18" />4 seguidores
          </span>
        </div>
      </div>
    </section>
  )
}
