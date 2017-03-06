import res from './res'

import { API_BASE } from 'src/api'

// Resources for /posts endpoint on API
// @see https://github.com/mzabriskie/axios#creating-an-instance
export const postsResource = res.create({
  baseURL: `${API_BASE}/posts/`,
})

// Request interceptor
postsResource.interceptors.request.use((config) => {
  setLoading(true)
  return config
}, (error) => {
  setLoading(false)
  console.log('RequestError: ', error)
  // Do something with request error
  return Promise.reject(error)
})

// Response interceptor
postsResource.interceptors.response.use((response) => {
  setLoading(false)
  return response
}, (error) => {
  setLoading(false)
  console.log('ResponseError: ', error)
  // Do something with response error
  return Promise.reject(error)
})
