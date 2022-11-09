export class User {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  isAdmin: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
