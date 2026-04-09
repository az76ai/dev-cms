import { configBuilder } from "@core/lib/config";
import { baseEntryPoint } from "@base/site";
import { devSpecific } from "@app/shared";
import { useEnv, useApi } from "@core/lib";

export const config = configBuilder({
  api: {
    async cms_method1(): Promise<string> {
      return "xxx";
    },

    async cms_method2(name: string): Promise<number> {
      return ("xxxxx" + name).length;
    },
  },
  env: {
    a: 1,
    x: "aaa",
    cms_value: process.env.VALUE,
  },
  entryPoint: async () => {
    const { base } = await baseEntryPoint();

    const env = useEnv();
    const api = useApi();
    devSpecific();
    console.log("CMS  entrypoint", base, env);
    console.log("cms api call", await api.cms_method2(env.x));
  },
});
