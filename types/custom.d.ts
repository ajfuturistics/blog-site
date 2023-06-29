interface categoryData {
  id: number;
  name: string;
  value: string;
}
interface NavData {
  id: number;
  title: string;
  subitems?: categoryData[];
}

interface BlogData {
  _id: number;
  banner?: string;
  imageDesc?: string;
  title: string;
  desc: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  userId?: {
    username: string;
  };
}
interface PostData {
  banner?: File | string | null;
  imageDesc?: string;
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
