import { IocContainer, ServiceIdentifier } from "@tsoa/runtime";
import { container } from "tsyringe";

export const iocContainer: IocContainer = {
  get: <T>(target: ServiceIdentifier<T>): T =>
    container.resolve<T>(target as never),
};
