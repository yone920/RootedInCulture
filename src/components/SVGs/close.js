import React from 'react'
import styled from 'styled-components'

 const Close = () => {
    return (
        <CloseIconContainer>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="close-icon" fillRule="evenodd" clipRule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
            </svg>
        </CloseIconContainer>
    )
}

    const CloseIconContainer = styled.div`
        .close-icon:hover {
            fill: red;
        }
    `

export default Close;