import Link from 'next/link'

export function PostList() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      {[1, 2, 3, 4].map((post) => (
        <Link href="/post/12345" key={post}>
          <article className="h-max-64 h-64 w-104 cursor-pointer rounded-lg border-2 border-transparent bg-base-post p-8 transition hover:border-base-label">
            <header className="mb-5 flex justify-center ">
              <h1 className="w-3/4 text-justify text-xl font-bold text-base-title">
                JavaScript data types and data structures
              </h1>

              <p className="mt-1 w-1/4 text-end text-sm text-base-span">
                Há 1 dia
              </p>
            </header>

            {/* max text lenght 224 caracters */}
            <p className="text-justify text-base text-base-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              provident autem vitae sunt cumque porro explicabo, quia veritatis.
              Sit, nobis! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Soluta, corrupti? elit.
            </p>
          </article>
        </Link>
      ))}
    </div>
  )
}
