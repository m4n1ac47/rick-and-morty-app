import React from 'react'

import { classNames } from '@utils'

import classes from './StatusIndicator.module.scss'

export type TIndicatorStatus = 'alive' | 'dead' | 'unknown'
interface IStatusProps {
  status?: TIndicatorStatus
}

const statusIndicatorClasses = {
  alive: classes.statusIndicator__active,
  dead: classes.statusIndicator__dead,
  unknown: classes.statusIndicator__unknown
}

export const StatusIndicator: React.FC<IStatusProps> = ({
  status = 'unknown'
}) => {
  return (
    <div
      className={classNames(
        classes.statusIndicator,
        statusIndicatorClasses[status]
      )}
    ></div>
  )
}
