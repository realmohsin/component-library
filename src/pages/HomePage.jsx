import React from 'react'
import { css } from '@emotion/core'

const HomePage = props => {
  return (
    <div css={homePage}>
      <h1 css={title}>Component Library</h1>
    </div>
  )
}

const homePage = ({ colors }) => css`
  display: grid;
  background-color: ${colors.primary};
  height: 100vh;
  width: 100vw;
`

const title = ({ colors }) => css`
  justify-self: center;
  align-self: center;
  color: ${colors.secondary};
  font-size: 84px;
`

export default HomePage
