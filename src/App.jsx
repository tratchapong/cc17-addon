import { Button } from "@mui/material"

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world! from Codecamp
    </h1>
    <Button variant="contained"
      sx = {{ color: 'red'}}
      className="bg-primary text-lime-400 ms-5 my-4"
    >Hello world</Button>
    </>
  )
}

export default App
