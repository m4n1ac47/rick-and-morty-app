import { useNavigate } from 'react-router'

import { ArrowBack } from '@assets'
import { Loader } from '@components'

import classes from './Character.module.scss'

const Character = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.page}>
      <button
        className={classes.button}
        onClick={() => navigate(-1)}
      >
        <ArrowBack /> <span>GO BACK</span>
      </button>
      <Loader text='Loading character...' />
      <Loader size='small' />
    </div>
  )
}

export default Character
