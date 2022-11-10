import Joi from 'joi';
import IPost from '../interfaces';

const newPostSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
});

export default (newPost: IPost): void => {
  const { error } = newPostSchema.validate(newPost);
  if (error) throw error;
};
