import { Route, Tags, Get, Post, Put, Path, Controller, Request } from "tsoa";
import { injectable } from "tsyringe";
import UserServices from "../services/userServices";

@Route("db")
@Tags("User")
@injectable()
export class UserController extends Controller {
  constructor(private userServices: UserServices) {
    super();
  }
  /**
   * @summary Fetch Similar Movies
   * @param id Movie ID
   * @returns List of similar movies
   */
  @Post("login")
  public async fetchSimilarMovies(@Request() req: any): Promise<any> {
    const data = req.body;
    const result = await this.userServices.userLogin(data);
    return result;
  }

  /**
   * @summary Register User
   * @param data User Data
   * @returns User Data
   */
  @Post("register")
  public async register(@Request() req: any): Promise<any> {
    const data = req.body;
    const result = await this.userServices.userRegister(data);
    return result;
  }
}
