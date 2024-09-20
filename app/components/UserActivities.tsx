import React from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

type UserActivitiesProps = {
  posts: Post[];
};

const UserActivities: React.FC<UserActivitiesProps> = ({ posts }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">User Activities</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            <h4 className="font-semibold">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
