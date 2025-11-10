import { USERS } from "@/lib/navlinks";
import { FC } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  ///get post from json placeholder
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await post.json();

  //match the id with user data
  const user = USERS.find((user) => user.id === Number(id));

  return (
    <div className="space-y-4">
      <h1 className="text-red-500">{user ? user.name : "User not found"}</h1>
      <h2 className="text-blue-500">Post Title: {postData.title}</h2>
      <p className="text-gray-700">{postData.body}</p>
    </div>
  );
};

export default Page;
