import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Plus, FileText, BookOpen, Trash2, Upload, CheckCircle2,
  AlertCircle, ExternalLink, Edit2, X, Image as ImageIcon, FileDown,
  Sparkles, Search, Layers, LayoutGrid, Users, Download, Award, Copy, Check
} from 'lucide-react'
import { supabase } from '../../lib/supabase'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'resources' | 'insights' | 'leads'>('resources')
  const [loading, setLoading] = useState(false)

  // Feedback Modal State
  const [modalFeedback, setModalFeedback] = useState<{ isOpen: boolean; type: 'success' | 'error'; title: string; message: string } | null>(null)

  // Delete Confirmation Modal State
  const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; id: string; type: 'resources' | 'insights' | 'resource_leads'; title: string } | null>(null)

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  // Slide-over Drawer State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Edit Mode state
  const [editingResource, setEditingResource] = useState<any | null>(null)
  const [editingInsight, setEditingInsight] = useState<any | null>(null)

  // Copy email state tracking
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  // Resources form state
  const [resourcesList, setResourcesList] = useState<any[]>([])
  const [resTitle, setResTitle] = useState('')
  const [resTag, setResTag] = useState('Whitepapers')
  const [resDesc, setResDesc] = useState('')
  const [resType, setResType] = useState('E-BOOK / PDF')
  const [resCoverFile, setResCoverFile] = useState<File | null>(null)
  const [resCoverPreview, setResCoverPreview] = useState<string | null>(null)
  const [resDownloadFile, setResDownloadFile] = useState<File | null>(null)

  // Insights form state
  const [insightsList, setInsightsList] = useState<any[]>([])
  const [insTitle, setInsTitle] = useState('')
  const [insSlug, setInsSlug] = useState('')
  const [insExcerpt, setInsExcerpt] = useState('')
  const [insContent, setInsContent] = useState('')
  const [insCategory, setInsCategory] = useState('AI Adoption')
  const [insAuthor, setInsAuthor] = useState('WorkplaceHQ Team')
  const [insReadTime, setInsReadTime] = useState('5 min read')
  const [insFeatured, setInsFeatured] = useState(false)
  const [insImageFile, setInsImageFile] = useState<File | null>(null)
  const [insImagePreview, setInsImagePreview] = useState<string | null>(null)

  // Leads / Subscribers state
  const [leadsList, setLeadsList] = useState<any[]>([])

  useEffect(() => {
    fetchResources()
    fetchInsights()
    fetchLeads()
  }, [])

  const fetchResources = async () => {
    const { data, error } = await supabase.from('resources').select('*').order('created_at', { ascending: false })
    if (!error && data) setResourcesList(data)
  }

  const fetchInsights = async () => {
    const { data, error } = await supabase.from('insights').select('*').order('published_at', { ascending: false })
    if (!error && data) setInsightsList(data)
  }

  const fetchLeads = async () => {
    const { data, error } = await supabase.from('resource_leads').select('*').order('created_at', { ascending: false })
    if (!error && data) setLeadsList(data)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const handleCopyEmail = (email: string) => {
    if (!email) return
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => {
      setCopiedEmail(null)
    }, 2000)
  }

  const handleResourceImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResCoverFile(file)
      setResCoverPreview(URL.createObjectURL(file))
    }
  }

  const handleInsightImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setInsImageFile(file)
      setInsImagePreview(URL.createObjectURL(file))
    }
  }

  const uploadFileToBucket = async (bucket: string, file: File) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
    const { data, error } = await supabase.storage.from(bucket).upload(fileName, file)
    if (error) throw error

    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(data.path)
    return publicUrlData.publicUrl
  }

  const handleSaveResource = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let coverUrl = editingResource?.cover_image_url || resCoverPreview || ''
      let fileUrl = editingResource?.file_url || ''

      if (resCoverFile) coverUrl = await uploadFileToBucket('media', resCoverFile)
      if (resDownloadFile) fileUrl = await uploadFileToBucket('resources-file', resDownloadFile)

      if (!coverUrl || !fileUrl) {
        throw new Error('Please select both a cover image and a downloadable file.')
      }

      if (editingResource) {
        const { error } = await supabase.from('resources').update({
          title: resTitle,
          tag: resTag,
          description: resDesc,
          cover_image_url: coverUrl,
          file_url: fileUrl,
          resource_type: resType,
        }).eq('id', editingResource.id)
        if (error) throw error
        setModalFeedback({
          isOpen: true,
          type: 'success',
          title: 'Resource Updated',
          message: 'The resource item was modified successfully.'
        })
      } else {
        const { error } = await supabase.from('resources').insert([
          {
            title: resTitle,
            tag: resTag,
            description: resDesc,
            cover_image_url: coverUrl,
            file_url: fileUrl,
            resource_type: resType,
          },
        ])
        if (error) throw error
        setModalFeedback({
          isOpen: true,
          type: 'success',
          title: 'Resource Published',
          message: 'New resource has been added and published to the live site.'
        })
      }

      closeDrawer()
      fetchResources()
    } catch (err: any) {
      setModalFeedback({
        isOpen: true,
        type: 'error',
        title: 'Action Failed',
        message: err.message || 'Failed to save resource details.'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveInsight = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = editingInsight?.image_url || insImagePreview || ''
      if (insImageFile) imageUrl = await uploadFileToBucket('media', insImageFile)

      if (!imageUrl) throw new Error('Please provide a cover image for the article.')

      const autoSlug = insSlug || insTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

      if (editingInsight) {
        const { error } = await supabase.from('insights').update({
          title: insTitle,
          slug: autoSlug,
          excerpt: insExcerpt,
          content: insContent,
          category: insCategory,
          author_name: insAuthor,
          read_time: insReadTime,
          is_featured: insFeatured,
          image_url: imageUrl,
        }).eq('id', editingInsight.id)
        if (error) throw error
        setModalFeedback({
          isOpen: true,
          type: 'success',
          title: 'Article Updated',
          message: 'The insight article was updated successfully.'
        })
      } else {
        const { error } = await supabase.from('insights').insert([
          {
            title: insTitle,
            slug: autoSlug,
            excerpt: insExcerpt,
            content: insContent,
            category: insCategory,
            author_name: insAuthor,
            read_time: insReadTime,
            is_featured: insFeatured,
            image_url: imageUrl,
          },
        ])
        if (error) throw error
        setModalFeedback({
          isOpen: true,
          type: 'success',
          title: 'Article Published',
          message: 'New article has been published to the insights stream.'
        })
      }

      closeDrawer()
      fetchInsights()
    } catch (err: any) {
      setModalFeedback({
        isOpen: true,
        type: 'error',
        title: 'Action Failed',
        message: err.message || 'Failed to publish article.'
      })
    } finally {
      setLoading(false)
    }
  }

  const promptDelete = (id: string, type: 'resources' | 'insights' | 'resource_leads', title: string) => {
    setDeleteConfirm({ isOpen: true, id, type, title })
  }

  const executeDelete = async () => {
    if (!deleteConfirm) return
    const { id, type } = deleteConfirm
    setLoading(true)

    try {
      const { error } = await supabase.from(type).delete().eq('id', id)
      if (error) throw error

      setDeleteConfirm(null)
      setModalFeedback({
        isOpen: true,
        type: 'success',
        title: 'Item Deleted',
        message: 'The selected item was successfully removed from the database.'
      })

      if (type === 'resources') fetchResources()
      else if (type === 'insights') fetchInsights()
      else fetchLeads()
    } catch (err: any) {
      setDeleteConfirm(null)
      setModalFeedback({
        isOpen: true,
        type: 'error',
        title: 'Delete Failed',
        message: err.message || 'Could not complete delete operation. Verify Supabase RLS policies.'
      })
    } finally {
      setLoading(false)
    }
  }

  const openNewDrawer = () => {
    resetResourceForm()
    resetInsightForm()
    setIsDrawerOpen(true)
  }

  const startEditResource = (r: any) => {
    resetInsightForm()
    setEditingResource(r)
    setResTitle(r.title)
    setResTag(r.tag)
    setResDesc(r.description)
    setResType(r.resource_type)
    setResCoverPreview(r.cover_image_url)
    setIsDrawerOpen(true)
  }

  const startEditInsight = (i: any) => {
    resetResourceForm()
    setEditingInsight(i)
    setInsTitle(i.title)
    setInsSlug(i.slug)
    setInsCategory(i.category)
    setInsExcerpt(i.excerpt)
    setInsContent(i.content || '')
    setInsAuthor(i.author_name)
    setInsReadTime(i.read_time)
    setInsFeatured(!!i.is_featured)
    setInsImagePreview(i.image_url)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    resetResourceForm()
    resetInsightForm()
  }

  const resetResourceForm = () => {
    setEditingResource(null)
    setResTitle('')
    setResDesc('')
    setResCoverFile(null)
    setResCoverPreview(null)
    setResDownloadFile(null)
  }

  const resetInsightForm = () => {
    setEditingInsight(null)
    setInsTitle('')
    setInsSlug('')
    setInsExcerpt('')
    setInsContent('')
    setInsImageFile(null)
    setInsImagePreview(null)
    setInsFeatured(false)
  }

  // Filtered lists
  const filteredResources = resourcesList.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === 'All' || r.tag === selectedTag
    return matchesSearch && matchesTag
  })

  const filteredInsights = insightsList.filter(i => {
    return i.title.toLowerCase().includes(searchQuery.toLowerCase()) || i.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const filteredLeads = leadsList.filter(l => {
    return (
      l.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.resource_title?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Metric calculation for bottom cards
  const topResource = leadsList.reduce((acc: Record<string, number>, curr) => {
    const title = curr.resource_title || 'Unknown Resource'
    acc[title] = (acc[title] || 0) + 1
    return acc
  }, {})

  const mostDownloadedTitle = Object.entries(topResource).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

  const switchTab = (tab: 'resources' | 'insights' | 'leads') => {
    setActiveTab(tab)
    setSearchQuery('')
    setSelectedTag('All')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9F8F6] text-gray-900 font-sans" style={{ fontFamily: 'var(--font-body)' }}>

      {/* ───────────────────── SIDEBAR (DESKTOP) ───────────────────── */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-white border-r" style={{ borderColor: '#E5E1D8' }}>
        <div className="h-16 flex items-center gap-3 px-5 border-b" style={{ borderColor: '#E5E1D8' }}>
          <img src="/WorkplaceLogo.png" alt="WorkplaceHQ Logo" className="h-8 w-auto object-contain shrink-0" />
          <div className="min-w-0">
            <p className="font-display font-bold text-sm text-gray-900 truncate">WorkplaceHQ</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">CMS Studio</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
          <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">Content</p>

          <button
            onClick={() => switchTab('resources')}
            className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'resources' ? 'text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={activeTab === 'resources' ? { backgroundColor: '#0B3C2D' } : undefined}
          >
            <span className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4" /> Resources
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === 'resources' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {resourcesList.length}
            </span>
          </button>

          <button
            onClick={() => switchTab('insights')}
            className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'insights' ? 'text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={activeTab === 'insights' ? { backgroundColor: '#0B3C2D' } : undefined}
          >
            <span className="flex items-center gap-2.5">
              <FileText className="w-4 h-4" /> Insights
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === 'insights' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {insightsList.length}
            </span>
          </button>

          <p className="px-3 mt-4 mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">Audience</p>

          <button
            onClick={() => switchTab('leads')}
            className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'leads' ? 'text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={activeTab === 'leads' ? { backgroundColor: '#0B3C2D' } : undefined}
          >
            <span className="flex items-center gap-2.5">
              <Users className="w-4 h-4" /> Subscribers
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === 'leads' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {leadsList.length}
            </span>
          </button>
        </nav>

        <div className="p-3 border-t flex flex-col gap-1" style={{ borderColor: '#E5E1D8' }}>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> View Live Site
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* ───────────────────── MAIN COLUMN ───────────────────── */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Mobile top bar */}
        <header className="lg:hidden border-b bg-white sticky top-0 z-30" style={{ borderColor: '#E5E1D8' }}>
          <div className="px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/WorkplaceLogo.png" alt="WorkplaceHQ Logo" className="h-6 w-auto object-contain" />
              <span className="font-display font-bold text-sm">CMS Studio</span>
            </div>
            <div className="flex items-center gap-1">
              <a href="/" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-gray-500 hover:bg-gray-100" title="View Site">
                <ExternalLink className="w-4 h-4" />
              </a>
              <button onClick={handleLogout} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100" title="Sign Out">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex px-3 pb-3 gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => switchTab('resources')}
              className={`flex-1 min-w-[100px] py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'resources' ? 'text-white shadow-xs' : 'text-gray-600 bg-gray-100'
              }`}
              style={activeTab === 'resources' ? { backgroundColor: '#0B3C2D' } : undefined}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Resources ({resourcesList.length})
            </button>
            <button
              onClick={() => switchTab('insights')}
              className={`flex-1 min-w-[100px] py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'insights' ? 'text-white shadow-xs' : 'text-gray-600 bg-gray-100'
              }`}
              style={activeTab === 'insights' ? { backgroundColor: '#0B3C2D' } : undefined}
            >
              <FileText className="w-3.5 h-3.5" />
              Insights ({insightsList.length})
            </button>
            <button
              onClick={() => switchTab('leads')}
              className={`flex-1 min-w-[100px] py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'leads' ? 'text-white shadow-xs' : 'text-gray-600 bg-gray-100'
              }`}
              style={activeTab === 'leads' ? { backgroundColor: '#0B3C2D' } : undefined}
            >
              <Users className="w-3.5 h-3.5" />
              Leads ({leadsList.length})
            </button>
          </div>
        </header>

        {/* Header strip */}
        <div className="border-b bg-white sticky top-0 lg:top-0 z-20" style={{ borderColor: '#E5E1D8' }}>
          <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="font-display font-bold text-lg sm:text-xl text-gray-900">
                {activeTab === 'resources' ? 'Resources' : activeTab === 'insights' ? 'Insights' : 'Subscribers & Lead Activity'}
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                {activeTab === 'resources'
                  ? 'Whitepapers, toolkits, frameworks and reports served from the Resources Hub.'
                  : activeTab === 'insights'
                  ? 'Articles and perspectives published to the Insights feed.'
                  : 'Track users who requested and downloaded resources.'}
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border outline-none focus:border-[#0B3C2D] transition-all bg-[#FAF9F6]"
                  style={{ borderColor: '#E5E1D8' }}
                />
              </div>

              {activeTab !== 'leads' && (
                <button
                  onClick={openNewDrawer}
                  className="px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0"
                  style={{ backgroundColor: '#0B3C2D' }}
                >
                  <Plus className="w-4 h-4" />
                  <span>New <span className="hidden xs:inline">{activeTab === 'resources' ? 'Resource' : 'Article'}</span></span>
                </button>
              )}
            </div>
          </div>

          {activeTab === 'resources' && (
            <div className="px-4 sm:px-6 lg:px-8 pb-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {['All', 'Whitepapers', 'Toolkits', 'Frameworks', 'Reports'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedTag === tag ? 'text-white' : 'bg-white text-gray-600 border hover:bg-gray-50'
                  }`}
                  style={selectedTag === tag ? { backgroundColor: '#0B3C2D' } : { borderColor: '#E5E1D8' }}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-y-auto">

          {/* RESOURCES CONTENT */}
          {activeTab === 'resources' && (
            <div>
              {filteredResources.length === 0 ? (
                <div className="bg-white rounded-2xl border p-12 sm:p-16 text-center text-gray-400 flex flex-col items-center gap-2" style={{ borderColor: '#E5E1D8' }}>
                  <LayoutGrid className="w-8 h-8 text-gray-300" />
                  <p className="text-sm font-medium">No resources match your search yet.</p>
                  <button onClick={openNewDrawer} className="text-xs font-bold uppercase tracking-wider text-[#0B3C2D] hover:underline mt-1">
                    Add your first resource
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-3 md:hidden">
                    {filteredResources.map(r => (
                      <div key={r.id} className="bg-white rounded-2xl p-4 border shadow-xs flex flex-col gap-3" style={{ borderColor: '#E5E1D8' }}>
                        <div className="flex gap-3">
                          <div className="w-14 h-16 rounded-lg overflow-hidden bg-gray-100 border shrink-0" style={{ borderColor: '#E5E1D8' }}>
                            <img src={r.cover_image_url} alt={r.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#0B3C2D]">
                                {r.tag}
                              </span>
                              <span className="text-[10px] font-mono font-semibold text-gray-400 uppercase">{r.resource_type}</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{r.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{r.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: '#F3F0E9' }}>
                          <a href={r.file_url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#0B3C2D] hover:underline flex items-center gap-1">
                            <FileDown className="w-3.5 h-3.5" /> View File
                          </a>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => startEditResource(r)}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 flex items-center gap-1"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-[#0B3C2D]" /> Edit
                            </button>
                            <button
                              onClick={() => promptDelete(r.id, 'resources', r.title)}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hidden md:block bg-white rounded-2xl border shadow-xs overflow-hidden" style={{ borderColor: '#E5E1D8' }}>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b bg-[#FAF9F6]" style={{ borderColor: '#E5E1D8' }}>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 w-16">Cover</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Title</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Tag</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Type</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">File</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y" style={{ borderColor: '#E5E1D8' }}>
                        {filteredResources.map(r => (
                          <tr key={r.id} className="hover:bg-[#FAF9F6] transition-colors align-middle" style={{ borderColor: '#E5E1D8' }}>
                            <td className="px-5 py-3">
                              <div className="w-10 h-12 rounded-md overflow-hidden bg-gray-100 border" style={{ borderColor: '#E5E1D8' }}>
                                <img src={r.cover_image_url} alt={r.title} className="w-full h-full object-cover" />
                              </div>
                            </td>
                            <td className="px-5 py-3 max-w-xs">
                              <p className="font-semibold text-gray-900 text-sm line-clamp-1">{r.title}</p>
                              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{r.description}</p>
                            </td>
                            <td className="px-5 py-3">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#0B3C2D]">
                                {r.tag}
                              </span>
                            </td>
                            <td className="px-5 py-3">
                              <span className="text-[11px] font-mono font-semibold text-gray-500 uppercase">{r.resource_type}</span>
                            </td>
                            <td className="px-5 py-3">
                              <a href={r.file_url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#0B3C2D] hover:underline flex items-center gap-1 w-fit">
                                <FileDown className="w-3.5 h-3.5" /> Open
                              </a>
                            </td>
                            <td className="px-5 py-3">
                              <div className="flex items-center justify-end gap-1">
                                <button onClick={() => startEditResource(r)} className="p-2 rounded-lg text-gray-500 hover:text-[#0B3C2D] hover:bg-gray-100" title="Edit">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => promptDelete(r.id, 'resources', r.title)} className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50" title="Delete">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          {/* INSIGHTS CONTENT */}
          {activeTab === 'insights' && (
            <div>
              {filteredInsights.length === 0 ? (
                <div className="bg-white rounded-2xl border p-12 sm:p-16 text-center text-gray-400 flex flex-col items-center gap-2" style={{ borderColor: '#E5E1D8' }}>
                  <LayoutGrid className="w-8 h-8 text-gray-300" />
                  <p className="text-sm font-medium">No articles match your search yet.</p>
                  <button onClick={openNewDrawer} className="text-xs font-bold uppercase tracking-wider text-[#0B3C2D] hover:underline mt-1">
                    Publish your first article
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-3 md:hidden">
                    {filteredInsights.map(a => (
                      <div key={a.id} className="bg-white rounded-2xl p-4 border shadow-xs flex flex-col gap-3" style={{ borderColor: '#E5E1D8' }}>
                        <div className="flex gap-3">
                          <div className="w-16 h-14 rounded-lg overflow-hidden bg-gray-100 border shrink-0" style={{ borderColor: '#E5E1D8' }}>
                            <img src={a.image_url} alt={a.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800">{a.category}</span>
                              {a.is_featured && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-amber-600" /> Featured
                                </span>
                              )}
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{a.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{a.excerpt}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: '#F3F0E9' }}>
                          <span className="text-[11px] text-gray-500 font-medium">{a.read_time}</span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => startEditInsight(a)}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 flex items-center gap-1"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-[#0B3C2D]" /> Edit
                            </button>
                            <button
                              onClick={() => promptDelete(a.id, 'insights', a.title)}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hidden md:block bg-white rounded-2xl border shadow-xs overflow-hidden" style={{ borderColor: '#E5E1D8' }}>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b bg-[#FAF9F6]" style={{ borderColor: '#E5E1D8' }}>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 w-16">Cover</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Title</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Category</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Read Time</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Featured</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y" style={{ borderColor: '#E5E1D8' }}>
                        {filteredInsights.map(a => (
                          <tr key={a.id} className="hover:bg-[#FAF9F6] transition-colors align-middle" style={{ borderColor: '#E5E1D8' }}>
                            <td className="px-5 py-3">
                              <div className="w-12 h-10 rounded-md overflow-hidden bg-gray-100 border" style={{ borderColor: '#E5E1D8' }}>
                                <img src={a.image_url} alt={a.title} className="w-full h-full object-cover" />
                              </div>
                            </td>
                            <td className="px-5 py-3 max-w-sm">
                              <p className="font-semibold text-gray-900 text-sm line-clamp-1">{a.title}</p>
                              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{a.excerpt}</p>
                            </td>
                            <td className="px-5 py-3">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800">{a.category}</span>
                            </td>
                            <td className="px-5 py-3">
                              <span className="text-[11px] text-gray-500 font-medium">{a.read_time}</span>
                            </td>
                            <td className="px-5 py-3">
                              {a.is_featured ? (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 flex items-center gap-1 w-fit">
                                  <Sparkles className="w-3 h-3 text-amber-600" /> Featured
                                </span>
                              ) : (
                                <span className="text-[11px] text-gray-300">—</span>
                              )}
                            </td>
                            <td className="px-5 py-3">
                              <div className="flex items-center justify-end gap-1">
                                <button onClick={() => startEditInsight(a)} className="p-2 rounded-lg text-gray-500 hover:text-[#0B3C2D] hover:bg-gray-100" title="Edit">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => promptDelete(a.id, 'insights', a.title)} className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50" title="Delete">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          {/* SUBSCRIBERS / LEADS TAB CONTENT */}
          {activeTab === 'leads' && (
            <div className="flex flex-col gap-6">
              {/* Summary Metric Cards (Placed Above) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border shadow-xs" style={{ borderColor: '#E5E1D8' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-emerald-50 text-[#0B3C2D]">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Subscribers</span>
                  </div>
                  <p className="font-display font-bold text-2xl text-gray-900">{leadsList.length}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border shadow-xs" style={{ borderColor: '#E5E1D8' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                      <Download className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Downloads</span>
                  </div>
                  <p className="font-display font-bold text-2xl text-gray-900">{leadsList.length}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border shadow-xs" style={{ borderColor: '#E5E1D8' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Top Resource</span>
                  </div>
                  <p className="font-display font-bold text-sm text-gray-900 truncate" title={mostDownloadedTitle}>
                    {mostDownloadedTitle}
                  </p>
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="bg-white rounded-2xl border p-12 sm:p-16 text-center text-gray-400 flex flex-col items-center gap-2" style={{ borderColor: '#E5E1D8' }}>
                  <Users className="w-8 h-8 text-gray-300" />
                  <p className="text-sm font-medium">No subscribers or downloads logged yet.</p>
                </div>
              ) : (
                <>
                  {/* Mobile Leads List */}
                  <div className="grid grid-cols-1 gap-3 md:hidden">
                    {filteredLeads.map(lead => (
                      <div key={lead.id} className="bg-white rounded-2xl p-4 border shadow-xs flex flex-col gap-2" style={{ borderColor: '#E5E1D8' }}>
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900 text-sm">{lead.full_name || 'Anonymous User'}</h3>
                          <span className="text-[10px] text-gray-400">
                            {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs text-emerald-800 font-medium truncate">{lead.email}</p>
                          <button
                            onClick={() => handleCopyEmail(lead.email)}
                            className="p-1.5 rounded-lg text-gray-500 hover:text-emerald-800 hover:bg-emerald-50 transition-colors shrink-0"
                            title="Copy email"
                          >
                            {copiedEmail === lead.email ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <div className="bg-[#FAF9F6] p-2.5 rounded-xl border mt-1" style={{ borderColor: '#E5E1D8' }}>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">Downloaded Resource</span>
                          <span className="text-xs font-semibold text-gray-800 line-clamp-1">{lead.resource_title || 'General Download'}</span>
                        </div>
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={() => promptDelete(lead.id, 'resource_leads', lead.email)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete Entry
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Leads Table */}
                  <div className="hidden md:block bg-white rounded-2xl border shadow-xs overflow-hidden" style={{ borderColor: '#E5E1D8' }}>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b bg-[#FAF9F6]" style={{ borderColor: '#E5E1D8' }}>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Subscriber Name</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Resource Downloaded</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Date</th>
                          <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y" style={{ borderColor: '#E5E1D8' }}>
                        {filteredLeads.map(lead => (
                          <tr key={lead.id} className="hover:bg-[#FAF9F6] transition-colors align-middle" style={{ borderColor: '#E5E1D8' }}>
                            <td className="px-5 py-3 font-semibold text-gray-900">{lead.full_name || 'Anonymous User'}</td>
                            <td className="px-5 py-3">
                              <div className="flex items-center gap-2">
                                <span className="text-emerald-800 font-medium">{lead.email}</span>
                                <button
                                  onClick={() => handleCopyEmail(lead.email)}
                                  className="p-1 rounded-md text-gray-400 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                                  title="Copy Email"
                                >
                                  {copiedEmail === lead.email ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            </td>
                            <td className="px-5 py-3 max-w-xs">
                              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-[#0B3C2D] border border-emerald-100 block truncate">
                                {lead.resource_title || 'General Download'}
                              </span>
                            </td>
                            <td className="px-5 py-3 text-xs text-gray-500">
                              {lead.created_at ? new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
                            </td>
                            <td className="px-5 py-3 text-right">
                              <button
                                onClick={() => promptDelete(lead.id, 'resource_leads', lead.email)}
                                className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2 text-[11px] text-gray-400">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Media & files are stored in Supabase Storage — changes go live immediately upon saving.</span>
          </div>
        </main>
      </div>

      {/* ───────────────────── DELETE CONFIRMATION MODAL ───────────────────── */}
      {deleteConfirm?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border animate-in zoom-in-95 duration-200" style={{ borderColor: '#E5E1D8' }}>
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-gray-900">Delete Content</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Are you sure you want to delete <span className="font-bold text-gray-800">"{deleteConfirm.title}"</span>? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                disabled={loading}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-xs disabled:opacity-50"
              >
                {loading ? 'Deleting...' : 'Delete Permanently'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────── ACTION FEEDBACK MODAL ───────────────────── */}
      {modalFeedback?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border animate-in zoom-in-95 duration-200 text-center flex flex-col items-center" style={{ borderColor: '#E5E1D8' }}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
              modalFeedback.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
            }`}>
              {modalFeedback.type === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
            </div>
            <h3 className="font-display font-bold text-base text-gray-900">{modalFeedback.title}</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-xs">{modalFeedback.message}</p>
            <button
              onClick={() => setModalFeedback(null)}
              className="mt-5 w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-xs"
              style={{ backgroundColor: '#0B3C2D' }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ───────────────────── SLIDE-OVER DRAWER WITH SMOOTH SLIDE ANIMATION ───────────────────── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end transition-opacity duration-300">

          <div className="absolute inset-0" onClick={closeDrawer} />

          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform ease-in-out duration-300 animate-in slide-in-from-right">

            <div className="p-4 sm:p-6 border-b flex items-center justify-between" style={{ borderColor: '#E5E1D8' }}>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900">
                  {activeTab === 'resources'
                    ? (editingResource ? 'Edit Resource' : 'Create New Resource')
                    : (editingInsight ? 'Edit Article' : 'Publish New Article')
                  }
                </h3>
                <p className="text-xs text-gray-500">Fill in details below to publish to database.</p>
              </div>
              <button onClick={closeDrawer} className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1">

              {activeTab === 'resources' && (
                <form id="resource-form" onSubmit={handleSaveResource} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Title</label>
                    <input
                      type="text"
                      required
                      value={resTitle}
                      onChange={e => setResTitle(e.target.value)}
                      placeholder="e.g. AI Workforce Adoption Playbook 2026"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                      style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Tag</label>
                      <select
                        value={resTag}
                        onChange={e => setResTag(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                        style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                      >
                        <option value="Whitepapers">Whitepapers</option>
                        <option value="Toolkits">Toolkits</option>
                        <option value="Frameworks">Frameworks</option>
                        <option value="Reports">Reports</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Badge Type</label>
                      <input
                        type="text"
                        required
                        value={resType}
                        onChange={e => setResType(e.target.value)}
                        placeholder="e.g. E-BOOK / PDF"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                        style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Description</label>
                    <textarea
                      rows={3}
                      required
                      value={resDesc}
                      onChange={e => setResDesc(e.target.value)}
                      placeholder="Brief summary..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                      style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                    />
                  </div>

                  <div className="p-4 rounded-xl border border-dashed bg-[#FAF9F6]" style={{ borderColor: '#CBD5E1' }}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#0B3C2D]" /> Cover Image
                    </label>

                    {resCoverPreview ? (
                      <div className="relative w-28 h-36 rounded-lg overflow-hidden border shadow-xs group">
                        <img src={resCoverPreview} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => { setResCoverFile(null); setResCoverPreview(null); }}
                          className="absolute top-1.5 right-1.5 bg-black/70 hover:bg-red-600 text-white p-1 rounded-full"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleResourceImageSelect}
                        className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#0B3C2D] file:text-white hover:file:bg-[#1DA54A]"
                      />
                    )}
                  </div>

                  <div className="p-4 rounded-xl border border-dashed bg-[#FAF9F6]" style={{ borderColor: '#CBD5E1' }}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 flex items-center gap-1.5">
                      <FileDown className="w-4 h-4 text-[#0B3C2D]" /> Downloadable File (PDF / ZIP)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.zip,.docx"
                      onChange={e => setResDownloadFile(e.target.files?.[0] || null)}
                      className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#0B3C2D] file:text-white hover:file:bg-[#1DA54A]"
                    />
                  </div>
                </form>
              )}

              {activeTab === 'insights' && (
                <form id="insight-form" onSubmit={handleSaveInsight} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Article Title</label>
                    <input
                      type="text"
                      required
                      value={insTitle}
                      onChange={e => setInsTitle(e.target.value)}
                      placeholder="e.g. Navigating AI Workforce Integration"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                      style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Category</label>
                      <input
                        type="text"
                        required
                        value={insCategory}
                        onChange={e => setInsCategory(e.target.value)}
                        placeholder="e.g. AI Adoption"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                        style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Read Time</label>
                      <input
                        type="text"
                        required
                        value={insReadTime}
                        onChange={e => setInsReadTime(e.target.value)}
                        placeholder="e.g. 5 min read"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                        style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Excerpt</label>
                    <textarea
                      rows={2}
                      required
                      value={insExcerpt}
                      onChange={e => setInsExcerpt(e.target.value)}
                      placeholder="Short summary..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                      style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-gray-700">Article Body</label>
                    <textarea
                      rows={6}
                      required
                      value={insContent}
                      onChange={e => setInsContent(e.target.value)}
                      placeholder="Full text content..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border outline-none focus:border-[#0B3C2D]"
                      style={{ borderColor: '#E5E1D8', backgroundColor: '#FAF9F6' }}
                    />
                  </div>

                  <div className="p-4 rounded-xl border border-dashed bg-[#FAF9F6]" style={{ borderColor: '#CBD5E1' }}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#0B3C2D]" /> Article Image
                    </label>

                    {insImagePreview ? (
                      <div className="relative w-full h-36 rounded-xl overflow-hidden border shadow-xs group">
                        <img src={insImagePreview} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => { setInsImageFile(null); setInsImagePreview(null); }}
                          className="absolute top-2 right-2 bg-black/70 hover:bg-red-600 text-white p-1 rounded-full"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleInsightImageSelect}
                        className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#0B3C2D] file:text-white hover:file:bg-[#1DA54A]"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={insFeatured}
                      onChange={e => setInsFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-[#0B3C2D]"
                    />
                    <label htmlFor="featured" className="text-xs font-semibold text-amber-900 cursor-pointer flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Mark as Featured Article
                    </label>
                  </div>
                </form>
              )}

            </div>

            <div className="p-4 border-t bg-gray-50 flex items-center justify-end gap-3" style={{ borderColor: '#E5E1D8' }}>
              <button
                type="button"
                onClick={closeDrawer}
                className="px-4 py-2.5 rounded-xl font-bold text-xs uppercase text-gray-600 hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                form={activeTab === 'resources' ? 'resource-form' : 'insight-form'}
                disabled={loading}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-sm disabled:opacity-50 flex items-center gap-2"
                style={{ backgroundColor: '#0B3C2D' }}
              >
                <Upload className="w-4 h-4" />
                {loading ? 'Saving...' : 'Save & Publish'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}