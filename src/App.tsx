import React from 'react';
import {
    BrowserRouter ,
    Routes,
    Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<h3>Home</h3>}  />
            <Route path="/customers" element={<h3>Customers Table</h3>} />
            <Route path="/add-customer" element={<h3>Post</h3>} />
            <Route path="/update-or-delete" element={<h3>Put/Delete</h3>} />
            {/* <Route path="/customers/:id" element={<<h3>GetByID</h3>} /> */}
        </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;