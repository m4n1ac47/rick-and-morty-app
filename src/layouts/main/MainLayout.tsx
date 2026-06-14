import { Outlet } from 'react-router'
import { Header, Footer } from '@components'
import classes from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
