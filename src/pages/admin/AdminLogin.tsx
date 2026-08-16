import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail, AlertCircle } from 'lucide-react'
import { supabase } from '../../lib/supabase'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--whq-bg)', fontFamily: 'var(--font-body)' }}>
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E1D8' }}>
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF' }}>
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-display font-700 text-2xl" style={{ color: '#111827' }}>Admin Portal</h1>
          <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Sign in to manage resources & insights</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase mb-1" style={{ color: '#374151' }}>Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#9CA3AF' }} />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@workplacehq.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all focus:border-[#0B3C2D]"
                style={{ borderColor: '#E5E1D8', backgroundColor: 'var(--whq-bg)' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase mb-1" style={{ color: '#374151' }}>Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#9CA3AF' }} />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all focus:border-[#0B3C2D]"
                style={{ borderColor: '#E5E1D8', backgroundColor: 'var(--whq-bg)' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all mt-2 disabled:opacity-50"
            style={{ backgroundColor: '#0B3C2D', fontFamily: 'var(--font-display)' }}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}