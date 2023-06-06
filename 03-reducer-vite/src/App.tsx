import { useReducer } from 'react'
import axios from 'axios'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': 
      return {
        loading: false,
        data: null,
        error: null,
      }
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      }
    case 'SUCCEED':
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case 'FAILED':
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const initAction = {
  loading: false,
  data: null,
  error: null,
}

function App() {

  const [state, dispatch] = useReducer(reducer, initAction)
  const { loading, data, error} = state

  const fetchUsers = async () => {
    dispatch({type: 'LOADING'})
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      dispatch({type: 'SUCCEED', data: response.data})
    } catch (e) {
      dispatch({type: 'FAILED', error: e})
    }
  }

  const initialize = () => {
    dispatch({type: 'INIT'}) 
  }

  // TODO: If you want to loading data when start this app
  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  if (loading) return <>Loading...</>
  if (error) return <>Error</>
  if (data == null) return <><button onClick={fetchUsers}>fetch</button></>
  else return <>
      <h1>
        Users
      </h1>
      <ul>
      { data.map((user, index) => (
          <li key={index}>
            {user.username} - {user.name}
          </li>
        ))
      }
      </ul>
      <button onClick={fetchUsers}>
        re-fetch
      </button>
      <button onClick={initialize}>
        init
      </button>
    </>
}

export default App
