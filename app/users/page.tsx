"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaUserAlt } from "react-icons/fa";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching users.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className='font-bold text-3xl text-center my-auto text-primary'>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-10 ml-80 w-[110%]">
      <h1 className="text-3xl text-primary font-semibold text-center">Users List</h1>
      <ul className="mt-4 grid grid-cols-2 gap-12">
        {users.map((user) => (
          <li key={user.id} className="p-3 flex items-center gap-3 border h-20 rounded-md hover:bg-uns shadow-sm">
            <FaUserAlt className='text-tertiary text-2xl' />
            <Link href={`/users/${user.id}`} className="text-gray-500 text-xl hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
