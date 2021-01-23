import React, {useState} from 'react'

const SearchForm = ({onSubmit}) => {
  const [word, setWord] = useState('')
  const card = document.getElementById("card")
  const onFormSubmit = e => {
    e.preventDefault()
    card.classList.add('open')
    console.log(word)
    onSubmit(word)
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input id="searchInput" type="text" name="search" value={word} onChange={e => {setWord(e.target.value)}} />
      </form>
    </>
  )
}


export default SearchForm;
