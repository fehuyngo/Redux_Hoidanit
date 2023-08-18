import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchAllUser();
  },[]);

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    setListUsers(res ? res.data : []);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React and Hoi Dan IT!</h1>
        <div className='btn-actions'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div>Count = {count}</div> */}
        <table>
          <thead>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
          </thead>
          <tbody>
            {listUsers && listUsers.length && listUsers.map((item, index) => {
              return (
                <tr key={`table-redux-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
