import { Request, Response } from 'express';
import IPost from '../interfaces';
import PostService from '../services/Post.service';

export default class PostController {
  public postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  findAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.findAll();
    res.status(200).json(posts);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await this.postService.findById(Number(id));
    res.status(200).json(post);
  };

  create = async (req: Request, res: Response) => {
    const newPost: IPost = req.body;
    await this.postService.create(newPost);
    res.status(201).json({ message: 'Postagem criada!' });
  };

  update = async (req: Request, res: Response) => {
    const newPost: IPost = req.body;
    const { id } = req.params;
    await this.postService.update(newPost, Number(id));
    res.status(201).json({ message: 'Postagem atualizada!' });
  };

  destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.postService.destroy(Number(id));
    res.status(204).end();
  };

  findByTerm = async (req: Request, res: Response) => {
    const term = req.query;
    const posts = await this.postService.findByTerm(term.toString());
    res.status(200).json(posts);
  };
}