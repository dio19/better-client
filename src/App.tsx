import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import CustomersTable from './components/CustomersTable';
import Navbar from './components/NavBar';
import Home from './components/Home';
import FormPost from './components/FormPost';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/customers" element={<CustomersTable />} />
        <Route path="/add-customer" element={<FormPost />} />
        <Route path="/update-or-delete" element={<Form />} />
        <Route path="*" element={<h1>Not found</h1>} />
        {/* <Route path="/users/:id" element={<UserDetail eventHandler={handleBack}/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
