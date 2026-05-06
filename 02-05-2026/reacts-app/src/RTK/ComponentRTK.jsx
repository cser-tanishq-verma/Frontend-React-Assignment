import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import ComponentRTK1 from './ComponentRTK1'

const ComponentRTK = () => {
    return (
        <div>
            <Provider store={store}>
                <ComponentRTK1 />
            </Provider>
        </div>
    )
}

export default ComponentRTK
