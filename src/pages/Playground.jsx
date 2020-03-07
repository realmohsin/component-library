import React from 'react'
import { css } from '@emotion/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { color, space, layout } from 'styled-system'
import styled from '@emotion/styled'
import Container from '@material-ui/core/Container'

const Playground = props => {
  return (
    <div>
      <Container maxWidth='lg' css={container}>
        hello
      </Container>
    </div>
  )
}

const container = theme => css`
  background-color: ${theme.colors.primary};
  color: white;
  height: 100vh;
`

export default Playground
