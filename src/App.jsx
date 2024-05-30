
import Main from './layout/Main'
import ItemContextProvider from './store/itemContext'


const App = () => {

  return (
  <>
   <ItemContextProvider>
   <Main />
   </ItemContextProvider>
  </>
)
}

export default App