import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import StarRating from './components/StarRating';
import Accordion from './components/Accordion';
const dropdown_items = ['Links', 'Account', 'Something', 'Else'];
const accordion_items = [
  {
    head: 'Head 1 text',
    content: 'Content for box 1 Content for box 1 Content for box 1',
    index: 1
  },
  {
    head: 'Head 2 text',
    content: 'Content for box 2 Content for box 1 Content for box 1',
    index: 2
  },
  {
    head: 'Head 3 text',
    content: 'Content for box 3 Content for box 1 Content for box 1',
    index: 3
  },
]

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Dropdown width={200} items={dropdown_items}></Dropdown>
    <StarRating></StarRating>
    <Accordion width={300} items={accordion_items}></Accordion>
    </>
  )
}

export default App
