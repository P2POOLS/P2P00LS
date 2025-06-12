import { supabase } from '../lib/supabase'

export default async function Page() {
  const { data: users } = await supabase.from('usuarios').select()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuarios registrados</h1>
      <ul className="space-y-2">
        {users?.map((user) => (
          <li key={user.id} className="p-4 border rounded">
            {user.nombre} – {user.email}
          </li>
        ))}
      </ul>
    </main>
  )
}
