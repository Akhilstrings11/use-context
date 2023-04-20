import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UseContext from './Pages/UseContext';
import HomePage from './Pages/HomePage';
import ToDoList from './Pages/ToDoList';
import { createContext, useState } from 'react';

export const AppContext = createContext

function App() {

  const [count, setCount] = useState(0)
  const appContextValue = {
    count : count,
    setCount : setCount
  }

  return (
    <div>
      <AppContext.Provider value = {appContextValue}>
      <BrowserRouter>
      <Link to = '/homePage' element>Home Page</Link>
      <br></br>
      <Routes>
        <Route path = 'useContext' element = {<UseContext />} />
        <Route path = 'homePage' element = { <HomePage /> }/>
        <Route path= 'toDoList' element = { <ToDoList /> }/>
      </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
