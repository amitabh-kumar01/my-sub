export interface Credentials {
  email: string;
  pwd: string;
}

export interface RegisterFormData {
  fname: string;
  lname: string;
  email: string;
  pwd: string;
  cpwd: string;
  check: string;
  phone:string;
}

export interface User {
  id: number;
  name: string;
  full_name:string,
  email: string;
  phone:number,
  address:string
}

export interface UserState {
  user: User[] | null;
  userDetail: User[]; 
  isLoading: boolean;
  orderDetail:{},
  address:{}
}


export interface PasswordUpdateData {
  oldPassword: string;
  newPassword: string;

}
