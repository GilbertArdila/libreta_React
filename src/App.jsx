import {Header} from './Components/Header'
import {Form} from './Components/Form'
import {Lista} from './Components/Lista'



function App() {
 

  return (
    <div className='container mx-auto mt-20'>
      <Header></Header>
      <div className='mt-12 md:flex'>
        <Form></Form>
      <Lista></Lista>
      </div>
      
    </div>
  )
}

export {App} 
