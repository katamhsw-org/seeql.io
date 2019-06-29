import React from 'react'
import styled from 'styled-components'
 

const SImgWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding:0;
    margin:0;
    width: 100%
`

const SImg = styled.img`
    height: 100%;
    width: 100%;
`

const SidePanel = (props) => {
    return (
        <SImgWrapper>
            <SImg src={props.children} alt='SeeQl Logo'></SImg>
        </SImgWrapper>
    )
}

export default SidePanel;