import React from 'react'

import { classNames } from '@utils'

import type { TIndicatorStatus } from './types'

import classes from './StatusIndicator.module.scss'

interface IStatusProps {
  status?: TIndicatorStatus
}

const statusIndicatorClasses = {
  active: classes.statusIndicator__active,
  dead: classes.statusIndicator__dead,
  unknown: classes.statusIndicator__unknown
}

const StatusIndicator: React.FC<IStatusProps> = ({ status = 'unknown' }) => {
  return (
    <div
      className={classNames(
        classes.statusIndicator,
        statusIndicatorClasses[status]
      )}
    ></div>
  )
}

export default StatusIndicator
