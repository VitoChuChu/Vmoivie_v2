import { injectable } from "tsyringe";
import { UserType } from "../interface/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserDao from "../dao/userDao";

@injectable()
export default class UserServices {
  constructor(private userDao: UserDao) {
    this.userDao = userDao;
  }
  /**
   * @summary 取得TMDB API的generList
   * @param
   * @returns
   */
  public async userLogin(data: UserType): Promise<any> {
    const { email, password } = data;
    if (!email || !password) return "Please enter the form submission.";
    // 確認使用者是否有存在
    const user = await this.userDao.checkUserExist(email);
    if (user === null) return "Information incorrect.";
    // 確認密碼是否正確
    const isValid: boolean = bcrypt.compareSync(password, user.password);
    if (isValid) {
      const payload: { [index: string]: string } = {
        id: user.userID,
        name: user.userName,
        email: user.userEmail,
      };
      const accessToken: string = jwt.sign(
        payload,
        process.env.JWT_SECRET_ACCESS_KEY!,
        {
          expiresIn: "24h",
        }
      );
      return {
        accessToken: accessToken,
        userID: user.userID,
        userName: user.userName,
      };
    } else {
      return "Information incorrect.";
    }
  }

  public async userRegister(data: UserType): Promise<any> {
    const { name, email, password } = data;
    if (!name || !email || !password)
      return "Please enter the form submission.";
    // 確認使用者是否有存在
    const isUserExist = await this.userDao.checkUserExist(email);
    if (isUserExist !== null) return "User exist";
    // 創建使用者
    const hash: string = bcrypt.hashSync(password, 10);
    const user = await this.userDao.createUser(name, email, hash);
    if (user === null) return "User exist";
    const payload: { [index: string]: string } = {
      id: user.userID,
      name: user.userName,
      email: user.userEmail,
    };
    const accessToken: string = jwt.sign(
      payload,
      process.env.JWT_SECRET_ACCESS_KEY!,
      {
        expiresIn: "24h",
      }
    );
    return {
      accessToken: accessToken,
      userID: user.userID,
      userName: user.userName,
    };
  }
}
