import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import WorkplaceHQNav from './components/WorkplaceHQNav'
import LagosJobNav from './components/LagosJobNav'
import Footer from './components/Footer'

import WHQHome from './pages/whq/Home'
import WHQAbout from './pages/whq/About'
import WHQServices from './pages/whq/Services'
import WHQTraining from './pages/whq/Training'
import WHQWorkshops from './pages/whq/Workshops'
import WHQConsulting from './pages/whq/Consulting'
import WHQResources from './pages/whq/Resources'
import WHQInsights from './pages/whq/Insights'
import WHQContact from './pages/whq/Contact'
import { PrivacyPage, TermsPage, SecurityPage } from './pages/whq/LegalPages'

import LJHome from './pages/lj/Home'
import LJServices from './pages/lj/Services'
import ToolsHub from './pages/lj/ToolsHub'
import LJListings from './pages/lj/Listings'
import LJAbout from './pages/lj/About'
import LJContact from './pages/lj/Contact'

import ScrollToTop from './components/ScrollToTop'

function WHQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <WorkplaceHQNav />
        {children}
      </div>
      <Footer />
    </div>
  )
}

function LJLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <LagosJobNav />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* WorkplaceHQ routes */}
        <Route path="/" element={<WHQLayout><WHQHome /></WHQLayout>} />
        <Route path="/about" element={<WHQLayout><WHQAbout /></WHQLayout>} />
        <Route path="/services" element={<WHQLayout><WHQServices /></WHQLayout>} />
        <Route path="/training" element={<WHQLayout><WHQTraining /></WHQLayout>} />
        <Route path="/workshops" element={<WHQLayout><WHQWorkshops /></WHQLayout>} />
        <Route path="/consulting" element={<WHQLayout><WHQConsulting /></WHQLayout>} />
        <Route path="/resources" element={<WHQLayout><WHQResources /></WHQLayout>} />
        <Route path="/insights" element={<WHQLayout><WHQInsights /></WHQLayout>} />
        <Route path="/contact" element={<WHQLayout><WHQContact /></WHQLayout>} />
        <Route path="/privacy" element={<WHQLayout><PrivacyPage /></WHQLayout>} />
        <Route path="/terms" element={<WHQLayout><TermsPage /></WHQLayout>} />
        <Route path="/security" element={<WHQLayout><SecurityPage /></WHQLayout>} />
        <Route path="/lagos-jobs/workplace" element={<Navigate to="/" replace />} />

        {/* Lagos Job routes */}
        <Route path="/lagos-jobs" element={<LJLayout><LJHome /></LJLayout>} />
        <Route path="/lagos-jobs/services" element={<LJLayout><LJServices /></LJLayout>} />
        <Route path="/lagos-jobs/tools" element={<LJLayout><ToolsHub /></LJLayout>} />
        <Route path="/lagos-jobs/listings" element={<LJLayout><LJListings /></LJLayout>} />
        <Route path="/lagos-jobs/about" element={<LJLayout><LJAbout /></LJLayout>} />
        <Route path="/lagos-jobs/contact" element={<LJLayout><LJContact /></LJLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
