import React, {useState} from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import UserData from './components/UserData';

const App = () => {
  const [user, setUser] = useState([])
  // const user = 'shumatsumoto0328'
  const onSearchSubmit = async (word) => {
    try {
      const result = await axios.get(`${'https://api.github.com/users/'}${word}`)
      setUser(result.data)
      console.log(result.data)
    } catch(error) {
      console.log('error')
    }
  }
  return (
    <div className="App">
      <SearchForm onSubmit={onSearchSubmit} />
      <UserData user={user} />
    </div>
  );
}

export default App;
