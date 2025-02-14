import './App.css'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 via-[#0F172A] to-[#0F172A]">
      <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-lg border border-white/10 hover:border-sky-400/30 transition-all duration-500">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-400 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 rounded-full filter blur-[100px] opacity-30"></div>
        
        <h1 className="text-5xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-12">
          Counter
        </h1>
        
        <div className="space-y-8">
          <div className="relative bg-black/20 backdrop-blur-lg rounded-2xl p-8 shadow-inner">
            <div className="text-6xl font-bold text-center text-white mb-4">{count}</div>
            <input 
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-center text-2xl text-white focus:border-sky-400 focus:ring-2 ring-sky-400/20 transition-all outline-none"
              value={count}
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setCount(count + 1)}
              className="group relative bg-gradient-to-br from-sky-400 to-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/25 active:scale-95"
            >
              <span className="relative z-10">+1</span>
            </button>
            
            <button 
              onClick={() => setCount(count + 2)}
              className="group relative bg-gradient-to-br from-purple-400 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 active:scale-95"
            >
              <span className="relative z-10">+2</span>
            </button>

            <button 
              onClick={() => setCount(count - 1)}
              className="group relative bg-gradient-to-br from-pink-400 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25 active:scale-95"
            >
              <span className="relative z-10">-1</span>
            </button>

            <button
              onClick={() => setCount(count - 2)}
              className="group relative bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400/25 active:scale-95"
            >
              <span className="relative z-10">-2</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
