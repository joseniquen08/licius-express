export type userRequest = {
  email: string;
  password: string;
  role: number;
  created_at?: Date;
  modified_at?: Date;

  first_name?: string;
  last_name?: string;
}