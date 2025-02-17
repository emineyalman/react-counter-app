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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -top-10 left-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-lg border border-white/10 hover:border-purple-500/30 transition-all duration-500">
          {/* Glassmorphism Effects */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
          
          {/* Theme Selector - Updated Design */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full flex gap-2 border border-white/10">
            {Object.keys(themes).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${themes[t]} transition-all duration-300 hover:scale-110 ${
                  theme === t ? 'ring-2 ring-white scale-110' : 'opacity-70'
                }`}
              />
            ))}
          </div>

          <h1 className={`text-5xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r ${themes[theme]} mb-12 hover:scale-105 transition-transform cursor-default animate-gradient`}>
            Counter
          </h1>
          
          {/* Counter Display - Enhanced */}
          <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-inner group hover:bg-black/40 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-sm"></div>
            <div className="counter-value text-7xl font-bold text-center text-white mb-4 group-hover:scale-110 transition-transform relative">
              {count}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <input 
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-center text-2xl text-white focus:border-purple-400 focus:ring-2 ring-purple-400/20 transition-all outline-none"
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
