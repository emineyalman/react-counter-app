import './App.css'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95] flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-10 shadow-2xl w-full max-w-md border-2 border-white/20 hover:border-[#6366F1]/50 transition-all duration-500">
        <h1 className="text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F59E0B] mb-12 animate-text">
          Counter
        </h1>
        
        <div className="space-y-10">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-inner border border-white/10">
            <div className="text-6xl font-bold text-center text-white mb-6 animate-pulse">{count}</div>
            <input 
              className="w-full bg-white/5 border-2 border-white/20 rounded-xl p-5 text-center text-3xl text-white focus:border-[#6366F1] focus:ring-4 ring-[#6366F1]/20 transition-all"
              value={count}
              readOnly
            />
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <IncrementButton 
                className="group bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#6366F1]/30 hover:-translate-y-1 hover:scale-105"
                onClick={() => setCount(count + 1)}
              />
              <button 
                className="group bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 hover:scale-105"
                onClick={() => setCount(count + 2)}
              >
                +2
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <DecrementButton 
                className="group bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#EC4899]/30 hover:-translate-y-1 hover:scale-105"
                onClick={() => setCount(count - 1)}
              />
              <button
                className="group bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#EF4444]/30 hover:-translate-y-1 hover:scale-105"
                onClick={() => setCount(count - 2)}
              >
                -2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
