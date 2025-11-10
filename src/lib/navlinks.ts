export type NavLink = {
  id: string;
  label: string;
  href: string;
  title?: string;
  external?: boolean;
};

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { id: "home", label: "Home", href: "/", title: "Home Page" },
  { id: "about", label: "About", href: "/about", title: "About" },
  { id: "users", label: "Users", href: "/users", title: "User list" },
];

export const USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];
