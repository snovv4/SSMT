import express from 'express';

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import itemRouter from './routes/item.route.js';

const app = express();
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/items", itemRouter);
export default app;