import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
        <Link to = '/useContext'>Counter Page</Link>
      <br></br>
      <Link to = '/toDoList'>To Do List</Link>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage
