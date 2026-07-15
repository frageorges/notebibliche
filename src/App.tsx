import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Archive from './pages/Archive'
import CategoryPage from './pages/CategoryPage'
import ArticlePage from './pages/ArticlePage'
import About from './pages/About'
import Contact from './pages/Contact'

// import.meta.env.BASE_URL mirrors vite.config.ts's `base` (e.g. "/notebibliche/"
// in production, "/" in dev). React Router's basename is happiest without a
// trailing slash, so we strip it except when the whole basename is just "/".
const rawBase = import.meta.env.BASE_URL
const routerBasename = rawBase.endsWith('/') && rawBase !== '/' ? rawBase.slice(0, -1) : rawBase

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archivio" element={<Archive />} />
            <Route path="/categoria/:subcategory" element={<CategoryPage />} />
            <Route path="/articolo/:id" element={<ArticlePage />} />
            <Route path="/chi-sono" element={<About />} />
            <Route path="/contatti" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
