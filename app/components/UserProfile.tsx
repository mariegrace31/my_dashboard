import React from 'react';

type UserProfileProps = {
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

const UserProfile: React.FC<UserProfileProps> = ({ name, email, phone, address }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
      <p>Geo: Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
    </div>
  );
};

export default UserProfile;
