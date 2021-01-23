import React, {useState} from 'react'

const SearchForm = ({onSubmit}) => {
  const [word, setWord] = useState('')
  const onFormSubmit = e => {
    e.preventDefault()
    console.log(word)
    onSubmit(word)
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="search" value={word} onChange={e => {setWord(e.target.value)}} />
      </form>
    </>
  )
}


export default SearchForm;
