export interface IMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

export type ResponseSuccessType = {
  data: unknown;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IDecodeUser = {
  email: string;
  id: string;
};

type IAuthor = IDecodeUser & {
  name: string;
  avatar: string;
};

export type IPost = {
  author: IAuthor;
  id: string;
  body: string;
  likes: ILike[];
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
};

export type IComment = {
  _id: string;
  body: string;
} | null;

export type ILike = {
  _id: string;
  post: string;
  user: string;
} | null;
