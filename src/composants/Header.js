
//import React from 'react';

//class Header extends React.Component {
    //constructor() {
        //super();
        //this.state = {nom: "Claire"};
    //}
    //render() {
        //return <div><h1>Le site de : {this.state.nom}</h1></div>;
    //}
//}

//export default Header

//function Header(){
    //let nom="Claire"

    //return(
        //<div><h1>Le site de : {nom}</h1></div>
    //)
//}

//export default Header
// function Header(props){
//     const name=props.name
//     return(
//         <>
//             <h1>Bonjour {name} </h1>
//         </>
//     )
//     }
    
//     export default Header
// import React from 'react';
// import PropTypes from 'prop-types'


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//        this.state = {nom: "Faith"};
//     }
//     render() {
//         return <div><h1>Le site de : {this.props.nom}</h1></div>;
//     }
// }

// Header.propTypes={
//     nom: PropTypes.string
// }

// export default Header
// import React from 'react';
// import PropTypes from 'prop-types'

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div><h1 style={{color: "red"}}>Hello {this.props.nom} !</h1></div>;
//     }
// }

// Header.propTypes={
//     nom: PropTypes.string
// }

// export default Header
// import React from 'react';
// import PropTypes from 'prop-types'


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
// 	const mystyle = {
//       color: "white",
//       backgroundColor: "DodgerBlue",
//       padding: "10px",
//       fontFamily: "Arial"
//     };
//         return <div><h1 style={mystyle}>Hello {this.props.nom} !</h1></div>;
//     }
// }

// Header.propTypes={
//     nom: PropTypes.string
// }
// 
import React from 'react';
import PropTypes from 'prop-types'
import mystyle from '../Utils/Styles/Styles.module.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div><h1 className={mystyle.design}>Hello {this.props.nom} !</h1></div>;
    }
}

Header.propTypes={
    nom: PropTypes.string
}

export default Header
