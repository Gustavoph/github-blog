import { Post } from '@/shared/dtos/post'
import { api } from '../..'

export function getPosts() {
  return api.get('/repos/gustavoph/github-blog/issues')
}

export function getPost(postId: number) {
  return api.get<Post>(`/repos/gustavoph/github-blog/issues/${postId}`)
}
