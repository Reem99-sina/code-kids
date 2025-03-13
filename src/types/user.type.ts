export interface IUser {
  createdAt: string;
  email: string;
  id: number;
  status: "pending" | "active";
  updatedAt: string;
  username: string;
}

// export interface IUserResponse {
//   data: {
//     user?: IUser;
//     token: string | null;
//     status?: number;
//     message?: string;
//   };
// }
export interface IUserRegisterRequest {
  fullname: string;
  email: string;
  password: string;
  repeate_password: string;
}
export interface IUserLoginParentRequest {
  email: string;
  password: string;
}


export interface IUserLoginChildRequest {
  username: string;
  password: string;
}
export interface IUserVerifyRequest {
  email: string;
  code: number;
}
export interface IUserRequest {
  idNumber: string;
}
// export interface IUserForgetRequest {
//   email: string;
// }
// export interface RenewpasswordRequest {
//   password: string;
//   repeatPassword: string;
// }
export interface AddChildRequest {
  name: string;
  age: number;
  avatar_id: number;
  skills: string[];
}
