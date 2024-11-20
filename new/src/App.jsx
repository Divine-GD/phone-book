import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'; 
import './App.css';
import Insertcontact from './pages/insert';
import  Contactlist from './pages/contactlist';


function Home() {
  return <h2>Welcome to Contact Page</h2>;
}

function ContentRenderer() {
  const location = useLocation();

  return (
    <div className="custom-display-area">
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert_contact" element={<Insertcontact />} />
        <Route path="/contact_list" element={<Contactlist />} />
      </Routes>
    </div>
  );
}

 
function App() {
  const [count, setCount] = useState(0);
  const [contacts, setContacts] = useState([]);

  
   

  return (
    <Router>
     

   
      


      <ContentRenderer /> 
      <nav>
      <Link to="/">Home</Link> | <Link to="/insert_contact">Add New</Link> | <Link to="/contact_list">Contact List</Link>
      </nav>
    </Router>
  );
}

export default App;
