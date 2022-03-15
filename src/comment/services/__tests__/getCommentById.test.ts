import { CommentModel } from '../../entity/models/comment.models';
import { IComment } from '../../entity/types/comment.types';
import { getCommentByIdService } from '../getCommentById.services';

const CommentModelMock = CommentModel as jest.MockedClass<typeof CommentModel>;

const mockComment = {
  _id: '6210d026e7d2fa722757a409c',
  description: 'Excelente comida',
  post_id: '6210d026e7d2fa722757a409p',
  user_id: '6210d026e7d2fa722757a409u'
};

describe('getCommentByIdService',() => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error when the comment id is not provided', async() => {
    try {
      await getCommentByIdService('');
    } catch (error: any) {
      expect(error.message).toEqual('Error getting comment: invalid comment id');
    }
  });

  it('should return an error when the comment id is not valid', async() => {
    try {
      await getCommentByIdService('asdasdasdasdasd');
    } catch (error: any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  });


  it('Should call Model.find when the comment id is valid',async () => {
    CommentModelMock.findByIdAndPopulate = jest.fn();
    const comment_id = 'asdasda1212';
    await getCommentByIdService(comment_id);
    expect(CommentModelMock.findByIdAndPopulate).toHaveBeenCalledTimes(1);
    expect(CommentModelMock.findByIdAndPopulate).toHaveBeenCalledWith(comment_id)
  });

  it('should return an array of comments when the comment id is valid', async()=> {
    const comment_id = 'asdasda1212';
    CommentModelMock.findByIdAndPopulate = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockComment));
    const result: IComment = await getCommentByIdService(comment_id);
    expect(result).toEqual(mockComment);
  });

});