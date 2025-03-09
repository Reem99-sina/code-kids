export enum UserType {
  Hospital = "hospital",
  Patient = "patient",
  Doctor = "doctor",
  Relative = "relative",
}

export interface IUser {
  name: string;
  id: number;
  mobile: string;
  idNumber: string;
  userType: UserType;
  createdAt: string;
  updatedAt: string;
  birthDate: string;
  fabricClientId: string;
  fabricOrg: string;
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
  name: string;
  idNumber: string;
  mobile: string;
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
