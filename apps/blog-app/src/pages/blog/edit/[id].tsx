"use client";
import React, { FC } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { BlogProps, FormInputPost } from "@/utils/type";
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import Breadcrumb from "@repo/blog-ui/breadcrumb";
import Link from "next/link";

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
      <Breadcrumb
        linkHref={`/blog/${id}`}
        linkComponent={Link}
        ariaLabel="Back to blog post"
        contentBreadcrumb="Back to blog post"
        breadcrumbClassName="text-base text-foreground/70 flex gap-1 items-center mb-4"
      />
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
