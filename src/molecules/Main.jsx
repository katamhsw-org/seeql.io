import React from 'react'
import Description from '../atoms/Description'
import styled from 'styled-components'

const blurb = 'SQL is a powerful language used for interacting with relational databases. However, it is complex and creating queries can be time consuming and difficult for even experienced developers. SeeQL is a user-friendly application, built with both front-end users and developers in-mind.'


const SMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 0;
`
const SLaunch = styled.h1`
    padding: 0;
    margin: 5% 0 0 0;
    font-size: 32px;
`

const Main =()=>{
    return (
        <SMainWrapper>
            <SLaunch>Democratize Access to Your Database!</SLaunch>
                <Description>{blurb}</Description>
        </SMainWrapper>
    )
}

export default Main;