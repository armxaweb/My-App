import React from 'react'
import './App.css';
import Menu from './composants/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Aide from './Pages/Aide';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import FreelanceForm from './composants/ContactForm/FreelanceForm';
import AgenceForm from './composants/ContactForm/AgenceForm';



function App() {
 

  
  return (
    <React.StrictMode>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aide' element={<Aide/>}></Route>
          <Route path='/contact' element={<Contact/>}>
            <Route path='freelance' element={<FreelanceForm/>}></Route>
            <Route path='agence' element={<AgenceForm/>}></Route>
          </Route>
          <Route path='/services' element={<Services/>}>
           
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
   
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Header from './composants/Header';
// import Foot from './composants/Foot';
// import MonProfil from './composants/MonProfil';
// import Parent from './composants/Parent';
// import StatPourcentage from './composants/StatPourcentage';
// import lo from './image/logo192.png'
// import Logo from './composants/Logo';
// import Menu from './composants/Menu';

// function App() {
//   return (
//   <div>
//   <Menu/>
//   {/* <Logo/> */}
//   <Header nom={"Armand"}/>
//   <Foot/>
//   <MonProfil src={lo} alt={'imagedesite'} nom={'Armand'} email={'armandepaminond&as1@gmail.com'} tel={98919909}/>
//   <Parent/>
//   <h1 className='text-center text-primary'>Population</h1>
// 	    <div className='row mb-5 p-2'>
//         <StatPourcentage label="Class 1" total="0" score={203} />
//         <StatPourcentage label="Class 2" total={0} />
//         <StatPourcentage label="Class 3" score={f => f} />
//         <StatPourcentage label="Class 4" total={{}} score="0" />
//       </div>
//   </div>
//   );
// }
// export default App;
