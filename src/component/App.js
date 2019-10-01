import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const App = () => {
  const usersData = [
    { id: 1, name: 'Aashish', username: 'thebatman' },
    { id: 2, name: 'Gaurav', username: 'therock' },
    { id: 3, name: 'Dhanit', username: 'lebronjames' },
  ];

  const initialFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h1>Sample App</h1>
      <div className="row">
        <div className="col-6">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
        ) : (
          <Fragment>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
          )}
        </div>
        <div className="col-6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
