import { createRoot } from 'react-dom/client'
import { Count } from './ui/count'
import { Posts } from './ui/posts'
import { Users } from './ui/users'

createRoot(document.getElementById('root')).render(
  <main className="bg-slate-900 min-h-screen flex flex-col items-center pt-10 gap-y-8">
    <Count />
    <Users />
    <Posts />
  </main>
)
