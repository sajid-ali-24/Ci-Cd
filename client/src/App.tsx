import { Toaster } from 'sonner'
import Form from './components/Form'
import Notes from './components/Notes'

function App() {

  return (
    <div className='h-full p-32 mx-auto'>
      <main className='flex gap-12'>

     <Form/>
     <Notes/>
      </main>
     <Toaster position='bottom-right'/>
    </div>
  )
}

export default App
