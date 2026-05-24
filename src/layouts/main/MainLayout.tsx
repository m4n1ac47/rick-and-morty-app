import { Outlet } from 'react-router'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
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
