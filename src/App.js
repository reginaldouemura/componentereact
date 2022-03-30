
import Item from "./components/Item";
import Card from "./components/Card";


const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com react</h1>
    <ul>
     <Item>
       Item1
       </Item>
     <Item>
       Item2
       </Item>
     <Item>
       item3
       </Item>
    </ul>
    <Card/>
    </>

  )
    
  }

export default App;
