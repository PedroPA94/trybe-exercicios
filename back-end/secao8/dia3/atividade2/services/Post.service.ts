import IPost from '../interfaces';
import connection from '../models/connection';
import PostModel from '../models/Post.model';
import validateNewPost from '../validations/validateNewPost';

export default class PostService {
  public postModel: PostModel;

  constructor() {
    this.postModel = new PostModel(connection);
  }

  async findAll(): Promise<IPost[]> {
    return this.postModel.findAll();
  }

  async findById(id: number): Promise<IPost> {
    return this.postModel.findById(id);
  }

  async create(newPost: IPost): Promise<void> {
    validateNewPost(newPost);
    await this.postModel.create(newPost);
  }

  async update(newPost: IPost, id: number): Promise<void> {
    // validateNewPost(newPost);
    await this.postModel.update(newPost, id);
  }

  async destroy(id: number): Promise<void> {
    await this.postModel.destroy(id);
  }

  async findByTerm(term: string): Promise<IPost[]> {
    return this.postModel.findByTerm(term);
  }
}