import { Post } from '@/shared/dtos/post'
import { api } from '../..'

export function getPosts(query: string = '') {
  return api.get(`/search/issues?q=${query}%20repo:gustavoph/github-blog`)
}

export function getPost(postId: number) {
  return api.get<Post>(`/repos/gustavoph/github-blog/issues/${postId}`)
}
