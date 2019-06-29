import React from 'react'
import styled from 'styled-components'


const SPicWrapper = styled.div`
    width: 10px;
    height: 10px
    margin: 10px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    object-fit:cover
`

const SImg= styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
    object-fit:cover
`

const ConnectLogo =(props)=>{
    return(
        <SPicWrapper>
            <SImg src={props.children} alt='' width='30' height='30'></SImg>
        </SPicWrapper>
    )
}

export default ConnectLogo