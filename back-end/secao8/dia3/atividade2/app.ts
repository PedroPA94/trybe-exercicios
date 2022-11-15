import express, { ErrorRequestHandler } from 'express';
import 'express-async-errors';
import PostController from './controllers/Post.controller';

const app = express();
const postController = new PostController();
const postsId = '/posts/:id';

app.use(express.json());

app.get('/posts/search', postController.findByTerm);  
app.get('/posts', postController.findAll);
app.get(postsId, postController.findById);
app.post('/posts', postController.create);
app.put(postsId, postController.update);
app.delete(postsId, postController.destroy);

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
};

app.use(errorMiddleware);

export default app;