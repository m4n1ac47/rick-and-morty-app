import { Outlet } from 'react-router'

import { Footer, Header } from '@components'

import classes from './MainLayout.module.scss'

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
