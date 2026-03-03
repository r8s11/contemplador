import tailwind from "@astrojs/tailwind";
import awsAmplify from "astro-aws-amplify";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: awsAmplify(),
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
});
