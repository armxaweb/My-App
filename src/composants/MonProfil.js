// import React from 'react';

// const MonProfil= () => {
//   const name = 'John';
//   const age = 19;
 
//   const styles={
//     backgroundColor:"#F5F5F5",
//     fontSize:"18px",
//     color:"green",
//   }
  
//   return (
//     <div style = {styles}>
//       <h1>Salut, je suis {name}!</h1>
//       <p>J'ai {age} ans.</p>
//       <p>L'année prochaine , j'aurai {age + 1} ans.</p>
//       {age >= 18 && <p>Je suis majeure</p>}
//     </div>
//   );
// };

// export default MonProfil;
import React from "react"
import PropTypes from 'prop-types'; 



function MonProfil({src,alt,nom,email,tel }) {
    return (
     <div className="row">
        <div className=" col-4 ">
            <div className="card">
                <div className="card-top">
                    <img src={src} alt={alt} className="img-fluid"/>
                </div>
                <div className="card-body">
                    <h4>Qui suis je ?</h4>
                    <p> 
                        Je suis {nom}. Je suis passionné(e) de développement web et mobile. Je suis également fan
                        de cybersécutité. 
                    </p>
                    <p>
                        Mes Contacts
                        <br/>                    
                        Email: {email} 
                        <br/>
                        Téléphone: {tel}
                        <br/>   
                    </p>
                </div>
            </div>
        </div>
     </div>
    )

}

const isEmail = function(props, propName, componentName) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
  
    if (!regex.test(props[propName])) {
      return new Error(`Invalid prop ${propName} passes to ${componentName} `);
    }
  }
        MonProfil.propTypes = {
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            nom: PropTypes.string,
            email: isEmail,
            tel: PropTypes.number,
        };

export default MonProfil