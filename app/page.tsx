"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserProfile from './components/UserProfile';
import { FaUserAlt } from "react-icons/fa";

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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className='p-20 lg:p-10 w-[100%] lg:w-[80%] ml-0 md:ml-10 lg:ml-72'>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className="text-xl lg:text-4xl md:text-2xl font-bold text-primary">Welcome to our dashboard!</h1>
        <p className='font-thin text-sm lg:text-lg text-secondary'>We're excited to have you here</p>
        <hr className='border-2 border-primary w-[50%] mb-8 mx-auto'/>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 gap-5 ml-1 lg:ml-16'>
        {users.map((user) => (
          <li key={user.id} className="border rounded-md shadow-md p-4 text-center">
            <FaUserAlt className='text-3xl lg:text-5xl text-tertiary mb-4 mx-auto' />
            <h2 className="text-sm lg:text-xl font-semibold">{user.name}</h2>
            <p className='text-gray-400 text-sm lg:text-lg font-thin'>Email: {user.email}</p>
            <button
              onClick={() => openModal(user)}
              className='text-primary bg-uns p-2 text-sm lg:text-lg rounded-lg mt-4'
            >
              More Details
            </button>
          </li>
        ))}
      </ul>

      {/* Modal for user details */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[350px] lg:w-[700px] h-[300px] relative">
            <h2 className="text-xl lg:text-3xl text-primary font-semibold mb-4">{selectedUser.name}</h2>
            <p className='text-sm lg:text-xl'><strong>Email:</strong> {selectedUser.email}</p>
            <p className='text-sm lg:text-xl'><strong>Phone:</strong> {selectedUser.phone}</p>
            <p className='text-sm lg:text-xl'><strong>Address:</strong> {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</p>
            
            <div className="mt-10 flex gap-4">
              <Link href={`/users/${selectedUser.id}`} className="text-white bg-primary text-lg lg:text-xl rounded-lg px-4 py-2">
                View Post
              </Link>
              <button
                onClick={closeModal}
                className="text-primary text-lg lg:text-xl bg-uns p-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
