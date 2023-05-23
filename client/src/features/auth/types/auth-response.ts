import { IUser } from "../../../shared";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
