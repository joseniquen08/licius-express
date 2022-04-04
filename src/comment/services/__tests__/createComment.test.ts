import { CommentModel } from '../../entity/models/comment.models';
import { IComment } from '../../entity/types/comment.types';

const mockComment = {
  _id: '6210d026e7d2fa722757a409c',
  description: 'Excelente comida',
  post_id: '6210d026e7d2fa722757a409p',
  user_id: '6210d026e7d2fa722757a409u'
};

describe('createComment.test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
})