import React from 'react'
import styled from 'styled-components'

const SImgWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%
    margin: 0 20px;
    madding: 0 20px;
`

const SImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const Logo =(props)=>{
    return (
        <SImgWrapper>
            <SImg src={props.children} alt ='SeeQl Logo'></SImg>
        </SImgWrapper>
    )
}

export default Logo