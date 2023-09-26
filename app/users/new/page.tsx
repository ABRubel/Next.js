'use client';

import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();
  return <button onClick={() => router.push('/users')} className="btn btn-primary">New User</button>;
};

export default NewUser;
