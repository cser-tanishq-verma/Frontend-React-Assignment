import "./global.css"
import {Provider} from 'react-redux';
import {store} from './app/store.jsx';
import CounterComponent from './app/CounterComponent.jsx';


function App() {
  
  return (
    <>
      {/* <h1>i am App.jsx</h1> */}
      <Provider store={store}>
        <CounterComponent />
        </Provider>
    </>
  )
}

export default App
