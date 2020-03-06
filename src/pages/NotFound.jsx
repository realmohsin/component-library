import React from 'react'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

const NotFound = props => {
  return (
    <div css={notFound}>
      <h1 css={title}>404</h1>
    </div>
  )
}

const notFound = css`
  display: grid;
  background-color: ${colors.primary};
  height: 100vh;
  width: 100vw;
`

const title = css`
  justify-self: center;
  align-self: center;
  color: red;
  font-size: 72px;
`

export default NotFound
