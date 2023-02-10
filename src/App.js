import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React ,{useState} from 'react'
import Navbar from './pages/Navbar.js'
import Sidebar from './pages/sidebar.js'
import Card from './pages/Card.js'
import Button from './pages/footerbutton.js'

function App() {
  let [country , setCountry]=useState("")
  let [page , setPage]=useState(1)
  let [pageSize , setPagesize]=useState(32)
  let [totalacticles , setTotalarticles]=useState(0)
  let [activenav , setActivenav]=useState('')
  let [navbutton , setnavbutton]=useState(false)
  return (
    <Router>
      <Navbar activenav={activenav} setactivenav={setActivenav} navbutton={navbutton} setnavbutton={setnavbutton}/>
      <Sidebar setcountry={setCountry} country={country}/>
      <Routes>
        <Route path="/NewsMonkey" element={<Card country={country} category='general' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/entertainment" element={<Card country={country} category='entertainment' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/health" element={<Card country={country} category='health' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/sports" element={<Card country={country} category='sports' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/science" element={<Card country={country} category='science' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/technology" element={<Card country={country} category='technology' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
        <Route path="/NewsMonkey/business" element={<Card country={country} category='business' totalacticles={totalacticles} settotalarticles={setTotalarticles} page={page} pagesize={pageSize}/>}/>
      </Routes>
      {/* <Button page={page} setpage={setPage} totalacticles={totalacticles} pagesize={pageSize}/> */}
    </Router>
  );
}

export default App;
