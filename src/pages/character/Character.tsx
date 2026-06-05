import { useNavigate } from 'react-router'
import classes from './Character.module.css'
import { ArrowBack } from '@components/icon'
import Loader from '@components/loader/Loader'

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
