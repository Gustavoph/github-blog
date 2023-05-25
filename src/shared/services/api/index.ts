import axios from 'axios'
import { QueryClient } from '@tanstack/react-query'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const queryClient = new QueryClient()
