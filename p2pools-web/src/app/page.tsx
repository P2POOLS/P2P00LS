'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function HomePage() {
  const [usuarios, setUsuarios] = useState<any[]>([])

  useEffect(() => {
    const fetchUsuarios = async () => {
      const { data } = await supabase.from('usuarios').select('*')
      setUsuarios(data || [])
    }
    fetchUsuarios()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Usuarios registrados</h1>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.correo} - saldo: {u.saldo}</li>
        ))}
      </ul>
    </div>
  )
}
