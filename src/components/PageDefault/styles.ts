import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  flex: 1;
  height: 69px;
  border-bottom: 1px solid #c9c9c9;
  box-shadow: 0 0 5px 0;

  main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 16px;
  }
`
