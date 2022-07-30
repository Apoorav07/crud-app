import logo from './logo.svg';
import './App.css';


//components

import Navbar from './components/Navbar';
import Crudapp from './components/Crudapp';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Crudapp/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
