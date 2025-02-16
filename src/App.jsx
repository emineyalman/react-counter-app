import './App.css'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('default') // 'default', 'purple', 'cyan'

  const themes = {
    default: 'from-sky-400 to-purple-500',
    purple: 'from-purple-400 to-pink-500',
    cyan: 'from-cyan-400 to-blue-500'
  }

  const handleReset = () => {
    setCount(0)
    // Add a subtle animation when resetting
    const counterElement = document.querySelector('.counter-value')
    counterElement.classList.add('animate-bounce')
    setTimeout(() => counterElement.classList.remove('animate-bounce'), 500)
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 via-[#0F172A] to-[#0F172A]">
      <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-lg border border-white/10 hover:border-sky-400/30 transition-all duration-500">
        {/* Enhanced decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-400 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-sky-400/10 to-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-spin-slow"></div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`w-6 h-6 rounded-full bg-gradient-to-r ${themes[t]} transition-transform hover:scale-110 ${theme === t ? 'ring-2 ring-white' : ''}`}
            />
          ))}
        </div>

        <h1 className={`text-5xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r ${themes[theme]} mb-12 hover:scale-105 transition-transform cursor-default`}>
          Counter
        </h1>
        
        <div className="space-y-8">
          <div className="relative bg-black/20 backdrop-blur-lg rounded-2xl p-8 shadow-inner group hover:bg-black/30 transition-all">
            <div className="counter-value text-6xl font-bold text-center text-white mb-4 group-hover:scale-110 transition-transform">
              {count}
            </div>
            <input 
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-center text-2xl text-white focus:border-sky-400 focus:ring-2 ring-sky-400/20 transition-all outline-none"
              value={count}
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="group relative bg-gradient-to-br from-sky-400 to-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                1
              </span>
            </button>
            
            <button 
              onClick={() => setCount(prev => prev + 2)}
              className="group relative bg-gradient-to-br from-purple-400 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                2
              </span>
            </button>

            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="group relative bg-gradient-to-br from-pink-400 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                1
              </span>
            </button>

            <button
              onClick={() => setCount(prev => prev - 2)}
              className="group relative bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                2
              </span>
            </button>
          </div>

          <button
            onClick={handleReset}
            className="w-full bg-white/5 border border-white/10 text-white font-semibold py-3 rounded-xl transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Reset Counter
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
