import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
const dropdown_items = ['Links', 'Account', 'Something', 'Else'];

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Dropdown width={200} items={dropdown_items}></Dropdown>
    </>
  )
}

export default App
