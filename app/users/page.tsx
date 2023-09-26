import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User List</h1>
      <Link href="/users/new" className="btn">
        Add User
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
