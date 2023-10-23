//function Footer(){
    //let nom="Claire"
    //return(
//<div>
    //<a href="#">&copy; Copyright 2023 {nom}</a>
//</div>)
//}
//export default Footer

import React from 'react';

class Foot extends React.Component {
    constructor() {
        super();
        this.state = {nom: "Claire"};
    }
    render() {
        return <div><h1>Le site de : {this.state.nom}</h1></div>;
    }
}

export default Foot