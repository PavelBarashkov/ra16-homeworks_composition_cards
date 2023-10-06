import './App.css'
import { ListCards } from './components/ListCards/ListCards'

const listCard = [
    {title: 'заголовок', srcImg: '../'},
    {title: 'заголовок'},
    {title: 'заголовок', srcImg: '../'}
]

function App() {
  return (
    <ListCards list={listCard} />
  )
}

export default App
