import { DevEnvironment } from "./environments.dev";
import { ProdEnvironment } from "./environments.prod";

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === "production") {
    return ProdEnvironment;
  }
  return DevEnvironment;
}
