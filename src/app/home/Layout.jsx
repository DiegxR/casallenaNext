import NavBar from '@/components/navBar/NavBar'

export default function Layout({ children }) {
  return (
    <main style={{ height: '100vh' }}>
      {children}
      <NavBar />
    </main>
  )
}
