import { useEffect } from 'react'
import { usePostsStore } from '../store/usePostsStore'

export default function Posts() {
  const { posts, isPending, isError, getData } = usePostsStore()

  useEffect(() => getData(), [getData])

  return (
    <div className="bg-slate-800 w-5xl min-h-100 flex flex-col items-center text-white p-2 gap-y-2">
      <span className="block w-full max-w-62.5 text-center rounded-[5px] py-1 mb-2 bg-[#09f]">
        Posts ⭐
      </span>
      {isPending ? (
        <span>cargando...</span>
      ) : isError ? (
        <span>error</span>
      ) : posts.length === 0 ? (
        <span>no hay posts</span>
      ) : (
        <section className="flex flex-wrap gap-2">
          {posts.map(({ id, title, body }) => (
            <div
              key={id}
              className="w-[30%] grow bg-slate-900 p-2 rounded-md space-y-1"
            >
              <span className="block bg-[#09f]/20 p-1 rounded-md">{title}</span>
              <p className="text-sm">{body}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
