import { CommentModel } from '../../entity/models/comment.models';
import { IComment } from '../../entity/types/comment.types';
import { getCommentsAllService } from '../getCommentsAll.services';

const CommentModelMock = CommentModel as jest.MockedClass<typeof CommentModel>;

const mockComment = {
  _id: '6210d026e7d2fa722757a409c',
  description: 'Excelente comida',
  post_id: '6210d026e7d2fa722757a409p',
  user_id: '6210d026e7d2fa722757a409u'
};

describe('getCommentsAllService',() => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('Should call Model.find when the post request is valid',async () => {
    CommentModelMock.find = jest.fn();
    await getCommentsAllService();
    expect(CommentModelMock.find).toHaveBeenCalledTimes(1);
  });

  it('should return an array of projects when the post request is valid', async()=> {
    CommentModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([mockComment]));
    const result: IComment[] = await getCommentsAllService();
    expect(result).toEqual([mockComment]);
  });

});