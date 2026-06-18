import React from 'react'

import type { TIndicatorStatus } from './types'

import classes from './StatusIndicator.module.css'

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
      className={[classes.statusIndicator, statusIndicatorClasses[status]].join(
        ' '
      )}
    ></div>
  )
}

export default StatusIndicator
