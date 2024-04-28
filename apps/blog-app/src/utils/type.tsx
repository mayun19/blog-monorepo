import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { Tag } from "@prisma/client";

export type ChildProps = {
  pageTitle?: String;
  children: ReactNode;
};

export type ResponseData = {
  tags?: { id: string; tagId: string | null }[];
  posts?: Post[];
  post?: Post[];
  message?: string;
  updatePost?: any;
  error?: any;
};

export type PostData = {
  post: Post;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  tag?: Tag;
};

export type PostProps = {
  posts?: Post[];
};

export type FormInputPost = {
  title: string;
  content: string;
  tag?: Tag | null;
};

export type FormPostProps = {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
  tags?: string;
  initialValue?: FormInputPost;
};

export type BlogDetail = {
  id: any;
  // params?: {
  //   id: string | null
  // }
  title: string;
  content: string;
  tag: {
    id: string;
    name: string;
  };
};
export type BlogProps = {
  postContent?: BlogDetail | null;
  postId?: any;
};

export type ButtonActionProps = {
  postId: string;
};