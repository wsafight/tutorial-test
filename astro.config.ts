import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://wsafight.github.io",
  base: "tutorial-test",
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit()],
});
