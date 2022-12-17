import React from 'react'
import ReactDOM from 'react-dom/client'
import { FocusScreen } from './04-useRef/FocusScreen'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MultipleCustomHooks />
    <FocusScreen /> 
  // </React.StrictMode>
)
