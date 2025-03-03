import { User } from "../models/User";
import { AppDataSource } from "../data-source";

export default class UserDao {
  /**
   * 確認使用者是否存在
   * @param email
   * @param password
   * @returns boolean
   */
  public async checkUserExist(email: string): Promise<User | null> {
    const user: User | null = await AppDataSource.getRepository(User)
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.userEmail = :email", { email: email })
      .getOne();
    return user;
  }

  /**
   * 創建使用者
   * @param name
   * @param email
   * @param password
   * @returns User
   */
  public async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User | null> {
    const user: User = User.create({
      userName: name,
      userEmail: email,
      password: password,
    });
    await user.save();
    return user;
  }
}
