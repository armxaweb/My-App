// import React from "react";
// import Logo from "./Logo";
// //import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
// const Button = styled.button`
// background-color: black;
// color : red;
// width : 200px;
// border-radius : 5px
// `
// const Con = styled.p`
// display : flex;
// justify-content : center;
// ` 
// function Menu(){
//     return(
//         <div>
//         <NavContainer>
//             <Logo />
//            <a class="bg-succed">Accueil</a>
//            <a>Services</a>
//            <a>Aide</a>
//            <a>Contact</a>
//         </NavContainer>
//         <Con>
//         <Button>
//             <a>Appuyez</a>
//         </Button>
//         </Con>
//         </div>
//     )
// }

// export default Menu
// import React,{useState,useEffect} from "react";
// import Logo from "./Logo";
// import styled from 'styled-components'

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: ${props => props.$light ? "white" : "black"};
//     a{
//         color: ${props => props.$light ? "black" : "white"}
//     }
 
// `
// const Bouton=styled.a`
//     background-color:blue;
//     padding:20px;
//     color:white;
//     text-decoration:none;
// `
// const A=styled.a`
// font-size:16px;
// text-decoration:none;
// color:black;
// &:hover {
//     cursor: pointer;
//     color:blue;
// }
// `

// function Menu(){

//     return(
//         <NavContainer $light={true}>
//             <Logo />
//            <A>Accueil</A>
//            <A>Services</A>
//            <A>Aide</A>
//            <A>Contact</A>
//            <Bouton>Connexion</Bouton>
//         </NavContainer>
//     )
// }

// export default Menu
// import React,{useState,useEffect} from "react";
// import Logo from "./Logo";
// import styled from 'styled-components'

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: ${props => props.$light ? "white" : "black"};
//     a{
//         color: ${props => props.$light ? "black" : "white"}
//     }
 
// `
// const Bouton=styled.a`
//     background-color:blue;
//     padding:20px;
//     color:white;
//     text-decoration:none;
// `
// const A=styled.a`
// font-size:16px;
// text-decoration:none;
// color:black;
// &:hover {
//     cursor: pointer;
//     color:blue;
// }
// `

// function Menu(){
//     const [isClicked,setIsClicked]=useState(false)
    

//     useEffect(() => {
//        document.title='Accueil - Shiny'
//        if(isClicked==true){

//        }
//     },[])

//     return(
//         <NavContainer $light={!isClicked}>
//             <Logo />
//            <A>Accueil</A>
//            <A>Services</A>
//            <A>Aide</A>
//            <A>Contact</A>
//            <Bouton onClick={()=>{setIsClicked(!isClicked)}}>Connexion</Bouton>
//         </NavContainer>
//     )
// }

// export default Menu
// import React,{useState,useEffect} from "react";
// import Logo from "./Logo";
// import styled from 'styled-components'

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: ${props => props.$light==true ? "white" : "black"};
//     a{
//         color: ${props => props.$light==true ? "black" : "white"}
//     }
 
// `
// const Bouton=styled.a`
//     background-color:blue;
//     padding:20px;
//     color:white !important;
//     text-decoration:none;
// `
// const A=styled.a`
// font-size:16px;
// text-decoration:none;
// color:black;
// &:hover {
    
//     color:blue;
// }
// `

// function Menu(){
//     const [toggle,setToggle]=useState(true)
//     const [mode,setMode]=useState('light')
 
//     useEffect(() => {
//        document.title='Accueil - Shiny'
//         setToggle(!toggle)
//     },[mode])



//     return(
//         <NavContainer $light={toggle}>
//             <Logo />
//            <A>Accueil</A>
//            <A>Services</A>
//            <A>Aide</A>
//            <A>Contact</A>
//            <Bouton onClick={()=>{setMode('dark')}}>Connexion</Bouton>
//         </NavContainer>
//     )
// }

// export default Menu
// import React,{useState,useEffect} from "react";
// import Logo from "./Logo";
// import styled from 'styled-components'

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: ${props => props.$light==true ? "white" : "black"};
//     a{
//         color: ${props => props.$light==true ? "black" : "white"}
//     }
 
// `
// const Bouton=styled.a`
//     background-color:blue;
//     padding:20px;
//     color:white !important;
//     text-decoration:none;
// `
// const A=styled.a`
// font-size:16px;
// text-decoration:none;
// color:black;
// &:hover {
    
//     color:blue;
// }
// `

// function Menu(){
   
//     const [mode,setMode]=useState('light')
 
//     useEffect(() => {
//        document.title='Accueil - Shiny'
//        //setMode('light')
//     },[mode])



//     return(
//         <NavContainer $light={mode=='light'?true:false}>
//             <Logo />
//             <A>Accueil</A>
//             <A>Services</A>
//             <A>Aide</A>
//             <A>Contact</A>
//             <Bouton onClick={()=>{setMode('dark')}}>Connexion</Bouton>
//         </NavContainer>
//     )
// }

// export default Menu
import React,{useState,useEffect} from "react";
import Logo from "./Logo";
import styled from 'styled-components'
import { Link } from "react-router-dom";


const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.$light==true ? "white" : "black"};
    a{
        color: ${props => props.$light==true ? "black" : "white"}
    }
 
`
const Bouton=styled.a`
    background-color:blue;
    padding:20px;
    color:white !important;
    text-decoration:none;
`
const StyledLink=styled(Link)`
font-size:16px;
text-decoration:none;
color:black;
&:hover {
    
    color:blue;
}
`

function Menu(){
   
    const [mode,setMode]=useState('light')
 
    useEffect(() => {
       document.title='Accueil - Shiny'
       
    },[])

    return(
        <NavContainer $light={true}>
            <Logo />
            <Link to='/'>Accueil</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/aide'}>Aide</Link>
            <Link to={'/contact'}>Contact</Link>
            <Bouton>Connexion</Bouton>
        </NavContainer>
    )
}

export default Menu