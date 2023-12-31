import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRedux, fetchAllUsers } from "../action/actions";

const TableUser = () => {
  // const [listUsers, setListUsers] = useState();
  const dispatch = useDispatch();
  const { listUsers, isLoading, isError } = useSelector((state) => state.user);
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   console.log(data);
  //   setListUsers(data);
  // };

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUsers());
  }, []);

  const handleDeleteUser = (user) => {
    dispatch(deleteUserRedux(user.id));
  };
  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isError ? (
              <>
                <div>Something wrongs, please try again...</div>
              </>
            ) : (
              <>
                {isLoading ? (
                  <>
                    <div>Loading data...</div>
                  </>
                ) : (
                  <>
                    {listUsers &&
                      listUsers.length > 0 &&
                      listUsers.map((item, index) => {
                        return (
                          <tr key={`users-${index}`}>
                            <td>{index + 1}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteUser(item)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                    })}
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableUser;
