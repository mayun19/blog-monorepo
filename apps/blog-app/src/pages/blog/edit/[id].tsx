"use client";
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import { db } from "@/utils/prisma";
import { BlogProps, FormInputPost } from "@/utils/type";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

async function editPost(post: FormInputPost) {
  const response = await fetch("/api/posts/edit", {
    method: "PUT",
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
const BlogEditPage: FC<BlogProps> = ({ post }) => {
 const router = useRouter();

 const handleEdit: SubmitHandler<FormInputPost> = async (data) => {
    try {
      await axios.put(`/api/posts/edit`, data);
      router.push("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
 };
  
  const initialValue: FormInputPost | undefined = post
    ? {
        title: post.title,
        content: post.content,
        tag: {
          id: post.tag.id,
          name: post.tag.name,
        },
      }
    : undefined;

  return (
    <Layout>
      <h2 className="text-3xl text-center">Blog Edit</h2>
      <FormPost submit={handleEdit} initialValue={initialValue} isEditing />
    </Layout>
  );
};

export default BlogEditPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const post = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return {
    props: {
      post,
    },
  };
};
