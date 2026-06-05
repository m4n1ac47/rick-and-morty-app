import { Logo } from '@components/icon'
import classes from './Header.module.css'

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
