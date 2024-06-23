// steps to setup Shadcn-ui without typescript
// https://stackoverflow.com/questions/76714567/cant-use-shadcn-components

import { Button } from "@/components/ui/button"
import MyCarousel from "./MyCarousel"
import Modal01 from "./Modal01"

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button variant='outline'>OK</Button>
    <hr className="my-4"/>
    <MyCarousel className='bg-pink-200 max-w-2xl mx-auto text-center p-4'/>
    <hr className="my-4"/>
    <Modal01 />
    </>
  )
}

export default App
