import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import CharacterList from './Components/CharacterList'
import { Container } from 'react-bootstrap'
import CharacterDetail from './Components/CharacterDetail'
import FavoritesPage from './Components/FavoritesPage'
function App() {

  return (
    <>
      <Container>
        <h1 className='text-center'>Rick and Morty</h1>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<CharacterList />} />
            <Route path='/character/:id' element={<CharacterDetail />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
            <Route path='*' element={<h1>Not found</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
