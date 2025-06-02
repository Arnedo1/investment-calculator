import { useState } from "react"
import InputBox from "./components/InputBox"
import ResultsList from "./components/ResultsList"

function App() {
  const [years,setYears] = useState('')
  const [initial,setInitial] = useState('')
  const [rendament,setRendament] = useState('')
  const [addEnd,setAddEnd] = useState('')
  const [results,setResults] = useState([])



  return (
    <div>
      <InputBox 
      years={years} setYears={setYears}
      initial={initial} setInitial={setInitial}
      rendament={rendament} setRendament={setRendament}
      addEnd={addEnd} setAddEnd={setAddEnd}
      results={results} setResults={setResults}
      />
      <ResultsList
      years={years} setYears={setYears}
      initial={initial} setInitial={setInitial}
      rendament={rendament} setRendament={setRendament}
      addEnd={addEnd} setAddEnd={setAddEnd}
      results={results} setResults={setResults}
      />
    </div>
  )
}

export default App
