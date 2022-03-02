import { UserType } from "../enums/user-type";
import { BaseModel } from "./base-model";

export class User extends BaseModel{
  name: string = '';
  intern: boolean = false;
  email: string = '';
  password: string = '';
  dateOfBirthday: string = '';
  cpf = '';
  type = UserType.COMMON;

  cep = '';
  address = '';
  number = '';
  district = '';
  city = '';
  state = '';
}