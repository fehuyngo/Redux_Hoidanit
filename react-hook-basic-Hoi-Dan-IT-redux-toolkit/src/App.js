import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const { listUsers, isLoading, isError } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(fetchAllUsers());
  },[]);

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
            {isError ? (
              <>
                <div>Something wrongs, please try again...</div>
              </>
            ) : (
              <>
                {
                  isLoading ? (
                    <>
                      <div>
                        Loading data...
                      </div>
                    </>
                  ) : (
                    <>
                      {listUsers && listUsers.length && listUsers.map((item, index) => {
                        return (
                          <tr key={`table-redux-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                          </tr>
                        )
                      })}
                    </>
                  )
                }
              </>
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
