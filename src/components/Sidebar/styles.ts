import styled from 'styled-components'

import { ContainerProps } from './Types'
import { Link } from 'react-router-dom'

export const Container = styled.div <ContainerProps>`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${({ showFullMenu }) => (showFullMenu ? '220px' : '100px' )};
  background-color: #2B303B;
  transition: all 0.3s ease-out;
  flex-shrink: 0;
  z-index: 100;
`

export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 69px;
  box-shadow: 0 0 5px 0;
  background-color: #272B35;
`

export const HeaderBoxClosed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 69px;
  box-shadow: 0 0 5px 0;
  background-color: #272B35;
`

export const Title = styled.h2`
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 800;
  margin-left: 15px;
  color: #fff;
`

export const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-top: 9px;
    padding: 15px 24px;
    cursor: pointer;

    &:hover {
        background-color: #272B35;
        height: 50px;
        border-radius: 8px;
    }
`

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  gap: 24px;
`

export const LinkIcon = styled.div`
  display: flex;

  svg {
    font-size: 20px;
  }
`

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
`
