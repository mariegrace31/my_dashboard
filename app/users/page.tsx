"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <div className="p-6 ml-80">
      <h1 className="text-2xl font-semibold">Users List</h1>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="py-2 border-b">
            <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
