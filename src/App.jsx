import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { AppDetailPage } from './pages/AppDetailPage'
import { ContactPage } from './pages/ContactPage'
import { DownloadPage } from './pages/DownloadPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="apps/:appId" element={<AppDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
