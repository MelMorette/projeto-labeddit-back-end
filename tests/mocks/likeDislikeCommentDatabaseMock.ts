import { BaseDatabase } from "../../src/database/BaseDatabase";
import { LikeOrDislikeCommentDB } from "../../src/models/LikeOrDislikeComment";

const likeDislikeMock: LikeOrDislikeCommentDB[] = [
  {
    id_comment: "id-comentario-1",
    id_user: "u0002",
    like: null,
  },
  {
    id_comment: "id-comentario-2",
    id_user: "u0003",
    like: 1,
  },
  {
    id_comment: "id-comentario-2",
    id_user: "u0004",
    like: 0,
  },
];

export class LikeDislikeCommentDatabaseMock extends BaseDatabase {
  private LIKESDISLIKESCOMMENT_TABLE = "like_dislike_comment_post";

  findLikesAndDislikesById = async (
    id_user: string,
    id_comment: string
  ): Promise<LikeOrDislikeCommentDB[]> => {
    const commentLikeDB = likeDislikeMock.filter(
      (likeDislike) =>
        likeDislike.id_user === id_user && likeDislike.id_comment === id_comment
    );

    return commentLikeDB;
  };

  findLikesAndDislikesByIdComment = async (
    id_comment: string
  ): Promise<LikeOrDislikeCommentDB[]> => {
    const commentLikeDB = likeDislikeMock.filter(
      (likeDislike) => likeDislike.id_comment === id_comment
    );

    return commentLikeDB;
  };

  newLikeOrDislikeComment = async (
    newLikeComment: LikeOrDislikeCommentDB
  ): Promise<void> => {};

  updateLikeOrDislikeComment = async (
    id_user: string,
    id_comment: string,
    newLikeOrDislikeComment: any
  ): Promise<void> => {};

  deleteLikeOrDislikeComment = async (id_comment: string): Promise<void> => {};
}
