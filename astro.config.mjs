import { defineConfig } from 'astro/config';

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://wendypam.github.io";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

let BASE_URL = LOCALHOST_URL;

if(isBuild){
    BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
    site: BASE_URL,
});