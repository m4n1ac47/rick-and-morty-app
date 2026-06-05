import Portal from '@assets/images/portal.svg?react'
import PortalSmall from '@assets/images/portal_small.svg?react'
import classes from './Loader.module.css'

interface ILoaderProps {
  size?: 'small' | 'large'
  text?: string
}

const PortalMap = {
  small: PortalSmall,
  large: Portal
}

const Loader = ({ size = 'large', text }: ILoaderProps) => {
  const Component = PortalMap[size]

  return (
    <div className={classes.loader__wrapper}>
      <Component className={classes.loader} />
      {text && <p className={classes.loader__text}>{text}</p>}
    </div>
  )
}

export default Loader
