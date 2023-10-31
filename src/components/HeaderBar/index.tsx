import { IconContext } from 'react-icons'
import { BsChevronDown } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'

import * as S from './styles'

const HeaderBar = (): JSX.Element => {

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <S.HeaderContainer>
        <S.Wrapper>
          <S.Title>Dashboard</S.Title>
        </S.Wrapper>
        <S.BoxItens>
          <S.BoxCircle>
            <BsFillPersonFill size='50px'/>
          </S.BoxCircle>
          <S.BoxName>
            <S.Name>David Smith</S.Name>
          </S.BoxName>
          <BsChevronDown color='#000' size='15px'/>
        </S.BoxItens>
      </S.HeaderContainer>
    </IconContext.Provider>
  )
}

export default HeaderBar
