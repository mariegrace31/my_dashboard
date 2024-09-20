"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserProfile from './components/UserProfile';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className='p-10 w-full'>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className="text-4xl font-bold text-primary">Welcome to our dashboard!</h1>
        <p className='font-thin text-lg text-secondary'>We're excited to have you here</p>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b py-2">
            <UserProfile
              name={user.name}
              email={user.email}
              phone={user.phone}
              address={user.address}
            />
            <Link href={`/users/${user.id}`} className="text-blue-500">
              View Activities
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
