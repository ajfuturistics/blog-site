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
  banner: string;
  title: string;
  category: string;
  desc: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
}
interface ApiUsersData {
  users: UserData[];
  total: number;
}
