// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

// Deploying from Github Pages
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
	site: 'https://snorri-space.github.io',
	base: 'snorri'
});
