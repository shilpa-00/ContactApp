import React,{useState,useEffect} from 'react';
import './navbar.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Add from './Add';
import View from './View';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

const Navbar=()=>{
    const initialState=[];
    const local_storage_key="contact";
    const [contact,setContact]=useState(initialState);

    useEffect(()=>{
        localStorage.setItem(local_storage_key,JSON.stringify(contact));
    },[contact])

    useEffect(()=>{
        const newContact=JSON.parse(localStorage.getItem(local_storage_key));
        if(newContact) setContact(newContact);
    },[])

    return(
        <>
        <BrowserRouter>
        <div className='heading'>
        <h1 id='heading'>Contact Manager</h1>
        </div>
        <nav id='menu'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/view">View</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/add' element={<Add contact={contact} addContact={setContact}/>}/>
            <Route path='/view' element={<View data={contact} addContact={setContact} lsk={local_storage_key}/>}/>
        </Routes>
        </BrowserRouter>


        </>
    )
}

export default Navbar