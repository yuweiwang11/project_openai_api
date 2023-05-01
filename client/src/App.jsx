import { useState } from 'react'

function App() {
  const [queryEntry, setQueryEntry] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted:${queryEntry}`)
  }
  

  return (
    <>
      <h1>title</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Job description here"
          onChange={(e)=> setQueryEntry(e.target.value)}
        />
        <input type="submit" value="generate query" />
      </form>


      
    </>
  )
}

export default App
