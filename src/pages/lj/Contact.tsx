import { Mail, MessageSquare, Clock } from 'lucide-react'

export default function LJContact() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-white font-sans">
      
      {/* Light Clean Header with Green Gradient Mesh */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 overflow-hidden bg-white border-b border-[#E6E5E0]">
        {/* Soft Ambient Green Gradient Mesh */}
        <div 
          className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full opacity-15" 
          style={{ 
            background: 'radial-gradient(circle, #1DA54A 0%, #22C55E 50%, transparent 70%)',
            filter: 'blur(80px)' 
          }} 
        />
        <div 
          className="pointer-events-none absolute -bottom-20 left-10 w-[350px] h-[350px] rounded-full opacity-10" 
          style={{ 
            background: 'radial-gradient(circle, #1DA54A 0%, transparent 70%)',
            filter: 'blur(60px)' 
          }} 
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-[#1DA54A] bg-[#1DA54A]/10 border border-[#1DA54A]/20">
            Get in Touch
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#191919] leading-tight mb-4">
            Contact Lagos Job
          </h1>
          <p className="text-[#545454] text-base sm:text-lg max-w-2xl">
            Hiring partner inquiry, tool feedback, or general support — we're here.
          </p>
        </div>
      </div>

      {/* Main Form & Info Section */}
      <section className="px-4 sm:px-6 py-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* Support Ticket Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6E5E0] shadow-sm">
            <h2 className="font-display font-bold text-xl text-[#191919] mb-6">
              Support Ticket
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Your Name</label>
                <input 
                  className="w-full px-4 py-3 text-sm rounded-xl outline-none border border-[#E6E5E0] bg-[#FAFAFA] focus:bg-white focus:border-[#1DA54A] transition-all text-[#191919] placeholder-gray-400" 
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Email Address</label>
                <input 
                  className="w-full px-4 py-3 text-sm rounded-xl outline-none border border-[#E6E5E0] bg-[#FAFAFA] focus:bg-white focus:border-[#1DA54A] transition-all text-[#191919] placeholder-gray-400" 
                  type="email" 
                  placeholder="you@example.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Inquiry Type</label>
                <select className="w-full px-4 py-3 text-sm outline-none border border-[#E6E5E0] bg-[#FAFAFA] focus:bg-white focus:border-[#1DA54A] transition-all rounded-xl text-[#545454]">
                  <option value="">Select inquiry type...</option>
                  <option>Tool Feedback</option>
                  <option>Hiring Partner / Post a Job</option>
                  <option>Technical Issue</option>
                  <option>Partnership</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-3 text-sm outline-none resize-none h-32 border border-[#E6E5E0] bg-[#FAFAFA] focus:bg-white focus:border-[#1DA54A] transition-all rounded-xl text-[#191919] placeholder-gray-400" 
                  placeholder="Describe your issue or inquiry..." 
                />
              </div>

              <button className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#1DA54A] to-[#22C55E] hover:opacity-90 transition-all shadow-md">
                Submit Ticket
              </button>
            </div>
          </div>

          {/* Direct Support Channels & Response Metrics */}
          <div className="flex flex-col gap-5">
            
            {/* Email Support Card with Subtle Green Gradient Background */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1DA54A]/10 via-emerald-50/30 to-white border border-[#1DA54A]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#1DA54A] text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-[#191919] text-base block">Email Support</span>
                  <p className="text-xs text-[#1DA54A] font-semibold">Replies within 4 business hours</p>
                </div>
              </div>
              <p className="text-sm font-bold text-[#191919] mt-2">hello@lagosjob.ng</p>
            </div>

            {/* Hiring Partners */}
            <div className="p-6 rounded-3xl bg-white border border-[#E6E5E0] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#FF5A36]/10 text-[#FF5A36]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-[#191919] text-base">Hiring Partners</span>
              </div>
              <p className="text-sm text-[#545454] mb-3 leading-relaxed">
                Post jobs, access talent, and partner with Lagos Job to reach top candidates across Lagos.
              </p>
              <a href="mailto:partners@lagosjob.ng" className="text-sm font-bold text-[#FF5A36] hover:underline">
                partners@lagosjob.ng
              </a>
            </div>

            {/* Response Times */}
            <div className="p-6 rounded-3xl bg-white border border-[#E6E5E0] shadow-sm">
              <div className="flex items-center gap-2 font-display font-bold text-base text-[#191919] mb-4">
                <Clock className="w-4 h-4 text-[#1DA54A]" /> Expected Response Times
              </div>
              <div className="flex flex-col gap-3">
                {[
                  ['General inquiries', '4–8 hours'], 
                  ['Technical issues', '2–4 hours'], 
                  ['Hiring partnerships', '24 hours'], 
                  ['Tool feedback', '1–2 business days']
                ].map(([type, time]) => (
                  <div key={type} className="flex justify-between items-center text-sm border-b border-[#E6E5E0] pb-2 last:border-0 last:pb-0">
                    <span className="text-[#545454]">{type}</span>
                    <span className="font-bold text-[#1DA54A] bg-[#1DA54A]/10 px-2.5 py-0.5 rounded-full text-xs border border-[#1DA54A]/20">{time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}