import { Outlet } from "react-router-dom"
import HeaderBar from "../HeaderBar"
import Sidebar from "../Sidebar"

import * as S from './styles'

const PageDefault = (): JSX.Element => {

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <HeaderBar />
          <main>
            <Outlet />
          </main>
      </S.MainContent>
    </S.Container>
  )
}

export default PageDefault