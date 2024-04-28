"use client";
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import { db } from "@/utils/prisma";
import { BlogProps, FormInputPost } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

// async function editPost(post: FormInputPost) {
//   const response = await fetch("/api/posts/edit", {
//     method: "PUT",
//     body: JSON.stringify(post),
//   });
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
// }

const BlogEditPage: FC<BlogProps> = () => {
  const router = useRouter();
  const id = router.query.id;
  
  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data.post;
    },
  });
  

  // const {mutate: updatePost, isLoading: isLoadingUpdate} = useMutation({
  //   mutationFn: (newPost: FormInputPost) => {
  //     return axios.patch(`/api/posts/${id}`, newPost)
  //   },
  //   onError: (error) => {
  //     console.error("Error updating post:", error);
  //   },
  //   onSuccess: () => {
  //     router.push("/");
  //   },
  // })

  const handleEdit: SubmitHandler<FormInputPost> = async (data) => {
    try {
      await axios.put(`/api/posts/edit`, data);
      router.push("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const initialValue: FormInputPost | undefined = dataPost
    ? {
        title: dataPost.title,
        content: dataPost.content,
        tag: {
          id: dataPost.tag.id,
          name: dataPost.tag.name,
        },
      }
    : undefined;

  return (
    <Layout>
      <h2 className="text-3xl text-center">Blog Edit</h2>
      {initialValue === undefined ? (
        <div className="flex pt-7 items-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <FormPost initialValue={initialValue} submit={handleEdit} isEditing />
      )}
    </Layout>
  );
};

export default BlogEditPage;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const id = params?.id as string;
//   const post = await db.post.findFirst({
//     where: {
//       id: id,
//     },
//     select: {
//       id: true,
//       title: true,
//       content: true,
//       tag: true,
//     },
//   });

//   return {
//     props: {
//       post,
//     },
//   };
// };
