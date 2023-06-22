interface NavData {
  id: number;
  title: string;
  subitems?: string[];
}

interface BlogData {
  id: number;
  banner: string;
  title: string;
  date: string;
  category: string;
}
interface PostData {
  banner: File | string | null;
  title: string;
  category: string;
  desc: string;
}

interface UserData {
  _id: string;
  username: string;
  role: string;
}
interface User {
  id: string;
  username: string;
  role: string;
  password: string;
}
interface ApiUsersData {
  users: UserData[];
  total: number;
}

interface Session {
  user: User;
  expires: string;
}
