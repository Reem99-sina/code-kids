export interface IUser {
  createdAt: string;
  email: string;
  id: number;
  status: "pending" | "active";
  updatedAt: string;
  username: string;
  skills?: string[];
  userType?: "parent" | "child";
  avatarId?: null | string | number;
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
export interface ResendCodeRequest {
  email: string;
}

export interface VerifyResendCodeRequest {
  email: string;
  code:number
}

export interface ResetNewPasswordRequest {
  password: string;
  repeate_password:number
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
  schoolName: string;
  avatarId: number;
  skills: number[];
  image?:File
}

export interface AddImageChildRequest {
  id:number,
  image?:File
}
export interface AddChildResponse {
  username: string;
  password: string;
  age: number;
  skills: string[];
  id:number
}
