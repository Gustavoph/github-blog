import {
  CalendarDays,
  ChevronLeftIcon,
  ExternalLink,
  Github,
  MessageCircle,
} from 'lucide-react'
import { Link } from './Link'

export function PostCard() {
  return (
    <section className="-mt-20 flex w-[864px] gap-8 rounded-lg bg-base-profile p-8 pl-10 drop-shadow-md">
      <div className="flex w-full flex-col">
        <div className="mb-5 flex w-full justify-between">
          <Link href="/">
            <ChevronLeftIcon size="12" /> Voltar
          </Link>

          <Link href="/">
            Ver no github
            <ExternalLink size="12" />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-base-title">
          JavaScript data types and data structures
        </h2>

        <div className="mt-2 flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <Github className="text-base-label" size="18" />
            gustavoph
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <CalendarDays className="text-base-label" size="18" />
            Há 1 dia
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <MessageCircle className="text-base-label" size="18" />5 comentários
          </span>
        </div>
      </div>
    </section>
  )
}
