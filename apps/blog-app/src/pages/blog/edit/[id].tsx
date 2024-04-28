"use client";
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import { db } from "@/utils/prisma";
import { BlogProps, FormInputPost } from "@/utils/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

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
  const queryClient = useQueryClient();
  const router = useRouter();
  const id = router.query.id;

  const { data: dataPost } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data.post;
    },
  });

  const { mutate: updatePost } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      queryClient.invalidateQueries({
        queryKey: ["post", id],
      });
      return axios.put(`/api/posts/edit/${id}`, newPost);
    },
    onError: (error) => {
      console.error("Error updating post:", error);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  const handleEdit: SubmitHandler<FormInputPost> = async (data) => {
    updatePost(data);
  };

  return (
    <Layout>
      <h2 className="text-3xl text-center">Blog Edit</h2>
      {!dataPost ? (
        <div className="flex pt-7 items-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <FormPost
          initialValue={dataPost && dataPost}
          submit={handleEdit}
          isEditing
        />
      )}
    </Layout>
  );
};

export default BlogEditPage;
