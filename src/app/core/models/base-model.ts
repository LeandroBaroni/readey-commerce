export class BaseModel {
  id?: string;
  active?: boolean = true;

  createAt? = new Date();
  updateAt?: Date;
}