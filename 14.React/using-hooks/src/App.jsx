import React, { useState } from 'react'
import './app.css'

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, name: "John Wick", password: 100 },
    { id: 2, name: "James Bond", password: 200 },
    { id: 3, name: "Ms.November", password: 300 },
  ])

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault(); // prevents 'Submit Event'
    setLists([...lists, { id: lists.length + 1, name, password}]);
  }

  return (
    <div>
      <div className="container my-4">
        <form onSubmit={onSubmitHandler} className='col-8'>
          <div className="from-group">
            <label htmlFor="" className="form-label">Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              className="form-control" />
          </div>

          <div className="from-group">
            <label htmlFor="" className="form-label">Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control" />
          </div>

          <button type='submit' className="btn btn-primary my-4">Add</button>
        </form>

        <div className="list-group col-8">
          {lists.map(list => (
            <li key={list.id} className="list-group-item">{list.name} - {list.password}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
