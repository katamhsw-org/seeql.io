import React from 'react'
import styled from 'styled-components'


const ParagraphWrapper = styled.div`
    padding: 5% 0 0 0;
    color: grey;
    margin: 5% 5%;
    font-weight: 700
`

const Description =(props)=>{
    return(
        <ParagraphWrapper>
            <p>{props.children}</p>
        </ParagraphWrapper>
    )
}

export default Description