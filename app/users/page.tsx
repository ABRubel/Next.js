import UserTable from "./UserTable";

const UserPage = async () => {
  return (
    <>
      <h1>User List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  );
};

export default UserPage;
