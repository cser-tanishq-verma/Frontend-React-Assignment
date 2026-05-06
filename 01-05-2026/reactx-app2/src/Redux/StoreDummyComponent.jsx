import React from 'react'
import { store } from './Store/Store'
import { Provider } from 'react-redux'
import Counter from './Component/Counter'
import UserForm from './Component/UserForm'

const StoreDummyComponent = () => {
  return(
    <>
        <Provider store={store}>
            <Counter/>
            <UserForm/>
        </Provider>
    </>
  )
}

export default StoreDummyComponent
