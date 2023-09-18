import { Button } from './components/Button'
import { Wrapper } from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <Button onClick={()=>alert('Clicou')}>Ola</Button>
    </Wrapper>
  )
}

export default App
