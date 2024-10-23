import './App.css'
import Calculator from './Calculator'
import {Provider} from "react-redux"
import { store } from './store'
function App() {
  

  return (
    <>

    <Provider store={store} >
      <Calculator />
    </Provider>
    </>
  )
}

export default App
