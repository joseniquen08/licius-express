import { PostModel } from "../../entity/models/post.models";
import { getPostByIdService } from '../getPost.services';

const PostModelMock = PostModel as jest.MockedClass<typeof PostModel>;

const mockPost = {
  "post": {
      "title": "titulo de prueba",
      "content": "contenido de prueba",
      "attachment_urls": [
          "primer elemento"
      ]
  }
}

describe('getPostByIdService.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should return an error when post id is not provided', async () => {
    try {
      await getPostByIdService('');
    } catch (error: any) {
      expect(error.message).toEqual(
        'Error getting post: invalid post id'
      );
    }
  });

  it('should return an error when post id is not valid', async () => {
    try {
      await getPostByIdService('78478er');
    } catch (error: any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should call Model.find when the post id is valid', async () => {
    PostModelMock.findById = jest.fn();
    const post_id = '621eaf3bb26f2cbf1eb394a7';
    await getPostByIdService(post_id);
    expect(PostModelMock.findById).toHaveBeenCalledTimes(1);
    expect(PostModelMock.findById).toHaveBeenCalledWith(post_id);
  });

  // test('should return a post when the post id is valid', async () => {
  //   PostModelMock.find = jest.fn().mockImplementation(() => Promise.resolve(mockPost));
  //   const post_id = '621eaf3bb26f2cbf1eb394a7';
  //   const result: any = await getPostByIdService(post_id);
  //   expect(result).toEqual(mockPost);
  // })
});

