import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();

app
  .use(logger())
  .get("/", (c) => c.json({ hei: 'hei' }));

  console.log(`🦊 Mock-server is running at http://localhost:31337`);

  export default {
    port: 31337,
    fetch: app.fetch,
  };