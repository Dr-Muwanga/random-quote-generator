
import './App.css'
import Container from './components/container'

function App({color, setColor}) {
 

  return (
    <main id='wrapper'>
        <Container color={color} setColor={setColor}/>
    </main>
  )
}

export default App
