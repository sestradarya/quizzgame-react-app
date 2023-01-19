import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {
  return (
    <div>
      <Btn onClick={props.onHandleClick}>{props.caption}</Btn>
    </div>
  )
}

const Btn = styled.button`
  padding: .8rem 2.5rem;
  border-radius: 30px;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.3;
  font-weight: 700;
  letter-spacing: .2rem;
`