"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import UserActivities from '@/app/components/UserActivities';

type Post = {
  id: number;
  title: string;
  body: string;
};

const UserPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Error fetching posts.');
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p>Loading user activities...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-10 pl-3 mt-6 lg:mt-0 lg:pl-96 w-[80%]">
      <h1 className="text-xl lg:text-3xl text-primary font-semibold">Activities for User {id}</h1>
      <UserActivities posts={posts} />
    </div>
  );
};

export default UserPage;
