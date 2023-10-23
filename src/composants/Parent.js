import React, { useState } from 'react'

function Parent(){
    const [title, setTitle] = useState('Cours de React');
    return (
      <div>
        <div>Ceci est le composant Parent.</div>
        <br />
        <EnfantA titleA={title} />
      </div>
    )
  }
  

function EnfantA({ titleA }) {
    return (
      <div>
        La props est reçue du composant Parent et est passée au commposant EnfantA.
        <br />
        <EnfantB titleB={titleA} />
      </div>
    )
  }
  
  function EnfantB({ titleB }) {
    return (
      <div>
        La props est reçue du composant EnfantA et est passée au commposant EnfantC.
        <br />
        <EnfantC title={titleB} />
      </div>
    )
  }
  
  function EnfantC({ titleC }) {
    return (
      <div>
        La props est reçue du composant EnfantB.
        <br />
        <h3> Welcome to</h3>
        <h4>{titleC}</h4>
      </div>
    )
  }
  



export default Parent