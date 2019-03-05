import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props],
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={user.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" className="form-control" value={user.username} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary" >Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
