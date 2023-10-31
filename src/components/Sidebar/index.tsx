import { useState } from 'react'
import { IconContext } from 'react-icons'
import { BsChevronRight, BsChevronLeft, BsRocketTakeoffFill, BsLayersFill } from 'react-icons/bs'
import { BiSolidDashboard } from 'react-icons/bi'

import * as S from './styles'

const Sidebar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(true)

  const linksArray = [
    {
      label: 'Dashboard',
      icon: <BiSolidDashboard />,
      to: '/dashboard'
    },
    {
      label: 'Components',
      icon: <BsLayersFill />,
      to: '/components'
    }
  ]

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <S.Container showFullMenu={sidebar}>
        {sidebar ? (
          <S.HeaderBox>
            <BsRocketTakeoffFill size='35px'/>
            <S.Title>CSensors</S.Title>
            <S.NavIcon onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <BsChevronLeft /> : <BsChevronRight />}
            </S.NavIcon>
          </S.HeaderBox>
        ) : (
          <S.HeaderBoxClosed>
            <BsRocketTakeoffFill size='35px'/>
            <S.NavIcon onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <BsChevronLeft /> : <BsChevronRight />}
            </S.NavIcon>
          </S.HeaderBoxClosed>
        )}
        {linksArray.map(({label, icon, to}) => (
          <S.LinkContainer key={label}>
            <S.LinkItem to={to} style={!sidebar ? { width: 'fit-content' } : {}}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebar && <S.LinkLabel>{label}</S.LinkLabel>}
            </S.LinkItem>
          </S.LinkContainer>
        ))}
      </S.Container>
    </IconContext.Provider>
  )
}

export default Sidebar
