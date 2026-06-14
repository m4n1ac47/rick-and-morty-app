import { useNavigate } from 'react-router'
import classes from './Character.module.css'
import { ArrowBack } from '@assets/icons'
import { Loader } from '@components'

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
