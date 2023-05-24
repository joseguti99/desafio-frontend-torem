export interface LoginData {
  email: string;
  password: string;
}

export interface ResponseLogin {
  message?: string;
  token: string;
  userId: string;
}

export interface tokenData {
  authToken: string;
}