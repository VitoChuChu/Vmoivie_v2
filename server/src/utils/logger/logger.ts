import { configure, getLogger } from "log4js";

let appenders = ["console"];

configure({
  appenders: {
    console: { type: "console" },
  },
  categories: {
    default: { appenders, level: "debug" },
  },
});

export default getLogger();
