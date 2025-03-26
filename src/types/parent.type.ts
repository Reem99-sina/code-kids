export interface ResponseChildParentAdd {
  age?: number;
  avatarId?: number;
  createdAt?: string;
  email?: null | string;
  fullname?: string;
  googleId?: null | string;
  id?: number;
  is_online?: boolean;
  last_active?: string;
  parentId?: number;
  school_name?: string;
  skills?: {
    name: string;
    image: string;
  }[];
  socket_id?: null | number;
  status?: string;
  updatedAt?: string;
  userType?: "child" | "parent";
  username?: string;
}

export interface TypeoFSkillsResponse{
  name:string,
  id:number,
  image:string
}