import { Logo } from '@assets/images'
import classes from './Characters.module.css'

const Characters = () => {
  return (
    <div className={classes.page}>
      <div className={classes.logo_wrapper}>
        <Logo />
      </div>
    </div>
  )
}

export default Characters
