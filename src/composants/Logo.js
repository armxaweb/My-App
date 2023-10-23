import React from "react";
import image from "../image/shiny.jpeg"
import styled from 'styled-components'

export default function Logo(){

    const StyledImage=styled.img`
        width:150px;
    `
    return(
        <StyledImage src={image} alt={'Maphoto'}/>
    )
}