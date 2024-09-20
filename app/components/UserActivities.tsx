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
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            <h4 className="font-semibold uppercase">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
