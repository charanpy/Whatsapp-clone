const DisplayUsersState = (users, uid) => {
  const filteredUsers = users.filter(([key]) => key !== uid);
  return [filteredUsers];
};

export default DisplayUsersState;
