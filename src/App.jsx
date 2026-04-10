import { useState } from 'react'
import { Link } from 'react-router-dom' // Impor Link dari react-router-dom

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Tulis Kode Utama untuk Todo List' },
    { id: 2, name: 'Konfigurasi Tailwind CSS v4' },
    { id: 3, name: 'Deploy ke Vercel dan Cek Build Logs' },
  ]);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      <header className="border-b border-black">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter text-black hover:text-gray-700 transition-colors">
            ABUDZAR
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/todolist" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              List
            </Link>
            <Link to="/todolist/add" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Add Todo
            </Link>
            <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              Log in
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            Make Things Happen.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12">
            Minimalist Todo List designed for focus. Keep it simple, track your progress, and achieve more. No distractions, just your todos.
          </p>
          <div className="flex gap-4">
            <Link to="/todolist/add" className="bg-black text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add New Todo
            </Link>
            <Link to="/todolist" className="bg-gray-100 text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
              View List
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black tracking-tighter mb-8 border-t border-gray-200 pt-8">
            Your Focus for Today
          </h2>
          <ul className="space-y-4">
            {todos.map(todo => (
              <li key={todo.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-between gap-4 group hover:border-black transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-xs font-mono text-gray-400 pt-1">
                    #{todo.id.toString().padStart(3, '0')}
                  </span>
                  <span className="text-lg font-medium text-black group-hover:text-black">
                    {todo.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/todolist/${todo.id}/edit`} className="text-gray-400 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link>
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-black mt-24 text-center text-sm py-8 px-6 text-gray-600 font-medium">
        Build with Focus by GarudaPratama &copy; 2026 Abudzar's Todo List
      </footer>
    </div>
  )
}

export default App