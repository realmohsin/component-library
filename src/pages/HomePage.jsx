import React from 'react'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

const HomePage = props => {
  return (
    <div css={homePage}>
      <h1 css={title}>Component Library</h1>
    </div>
  )
}

const homePage = css`
  display: grid;
  background-color: ${colors.primary};
  height: 100vh;
  width: 100vw;
`

const title = css`
  justify-self: center;
  align-self: center;
  color: ${colors.secondary};
  font-size: 72px;
`

export default HomePage
