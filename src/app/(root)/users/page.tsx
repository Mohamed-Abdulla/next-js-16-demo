import { USERS } from "@/constants/navlinks";
import Link from "next/link";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div>
      <h1 className="mb-2 font-semibold">User List</h1>
      <ul>
        {USERS.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="text-red-500 underline">
              View {user.name}'s Profile
            </Link>{" "}
            - {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
