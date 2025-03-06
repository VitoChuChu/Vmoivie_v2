import { Route, Tags, Get, Controller } from "tsoa";
import { injectable } from "tsyringe";

@Route("db")
@Tags("Healch Check")
@injectable()
export class healthController extends Controller {
  /**
   * @summary Check if server alive
   * @returns String
   */
  @Get("health")
  public async checkHealth(): Promise<any> {
    return "Hi I'm here.";
  }
}
