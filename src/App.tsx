import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import WHQNavbar from './components/WHQNavbar'
import WHQFooter from './components/WHQFooter'
import LJNavbar from './components/LJNavbar'
import LJFooter from './components/LJFooter'

import WHQHome from './pages/whq/Home'
import WHQAbout from './pages/whq/About'
import WHQServices from './pages/whq/Services'
import WHQTraining from './pages/whq/Training'
import WHQWorkshops from './pages/whq/Workshops'
import WHQConsulting from './pages/whq/Consulting'
import WHQResources from './pages/whq/Resources'
import WHQInsights from './pages/whq/Insights'
import WHQContact from './pages/whq/Contact'

import LJHome from './pages/lj/Home'
import LJServices from './pages/lj/Services'
import LJToolsHub from './pages/lj/ToolsHub'
import LJJobListings from './pages/lj/JobListings'
import LJAbout from './pages/lj/About'
import LJContact from './pages/lj/Contact'

function WHQLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <WHQNavbar />
      <Outlet />
      <WHQFooter />
    </div>
  )
}

function LJLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <LJNavbar />
      <Outlet />
      <LJFooter />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WHQLayout />}>
          <Route path="/" element={<WHQHome />} />
          <Route path="/about" element={<WHQAbout />} />
          <Route path="/services" element={<WHQServices />} />
          <Route path="/training-programs" element={<WHQTraining />} />
          <Route path="/workshops" element={<WHQWorkshops />} />
          <Route path="/consulting" element={<WHQConsulting />} />
          <Route path="/resources" element={<WHQResources />} />
          <Route path="/insights" element={<WHQInsights />} />
          <Route path="/contact" element={<WHQContact />} />
        </Route>
        <Route element={<LJLayout />}>
          <Route path="/lagos-jobs" element={<LJHome />} />
          <Route path="/lagos-jobs/services" element={<LJServices />} />
          <Route path="/lagos-jobs/tools" element={<LJToolsHub />} />
          <Route path="/lagos-jobs/jobs" element={<LJJobListings />} />
          <Route path="/lagos-jobs/about" element={<LJAbout />} />
          <Route path="/lagos-jobs/contact" element={<LJContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
