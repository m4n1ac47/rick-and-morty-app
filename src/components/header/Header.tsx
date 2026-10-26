import { Logo } from '@assets'

import classes from './Header.module.scss'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
      </div>
    </header>
  )
}
