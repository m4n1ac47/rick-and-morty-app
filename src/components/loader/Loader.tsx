import { Portal, PortalSmall } from '@assets'

import classes from './Loader.module.scss'

interface ILoaderProps {
  size?: 'small' | 'large'
  text?: string
}

const PortalMap = {
  small: PortalSmall,
  large: Portal
}

export const Loader = ({ size = 'large', text }: ILoaderProps) => {
  const Component = PortalMap[size]

  return (
    <div className={classes.loader__wrapper}>
      <Component className={classes.loader} />
      {text && <p className={classes.loader__text}>{text}</p>}
    </div>
  )
}
