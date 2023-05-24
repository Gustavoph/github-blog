import { PostCard } from './PostCard'

export function PostList() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      {[1, 2, 3, 4].map((post) => (
        <PostCard key={post} />
      ))}
    </div>
  )
}
