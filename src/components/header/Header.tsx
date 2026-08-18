import { Logo } from '@assets/icons'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
      </div>
    </header>
  )
}

export default Header
