import { USERS } from "@/constants/navlinks";
import { FC } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  //match the id with user data
  const user = USERS.find((user) => user.id === Number(id));
  return <div>{user ? user.name : "User not found"}</div>;
};

export default Page;
