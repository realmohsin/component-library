import React from 'react'
import { css } from '@emotion/core'

const NotFound = props => {
  return (
    <div css={notFound}>
      <h1 css={title}>404</h1>
    </div>
  )
}

const notFound = ({ colors }) => css`
  display: grid;
  background-color: ${colors.primary};
  height: 100vh;
  width: 100vw;
`

const title = ({ colors }) => css`
  justify-self: center;
  align-self: center;
  color: red;
  font-size: 172px;
`

export default NotFound
