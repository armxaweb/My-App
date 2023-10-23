// import React from "react";
// import styled from 'styled-components'
 
// const Textes=styled.p`
// background-color: brown ;
// color : white
// `
// function Contact() {
//     return(
//         <Textes>
//             Bienvenue
//         </Textes>
//     )
// }
// export default Contact
import React from "react";
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
const Ho = styled.h1`
color : red
`


function Contact(){

    return(
        <div>
            <Ho>Bienvenue sur la page de contact</Ho>
            <Link to='agence'>Agence</Link>
            <br/>
            <Link to='freelance'>Freelance</Link>
            <Outlet/>
        </div>
    )
}

export default Contact