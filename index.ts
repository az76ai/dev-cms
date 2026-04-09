import { useEnv, useApi } from "@core/lib";

export const devSpecific = () => {
  const env = useEnv();
  console.log("dev specific , x = ", env.x);
};
