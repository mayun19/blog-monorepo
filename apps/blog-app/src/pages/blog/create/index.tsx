"use client";
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import { FormInputPost } from "@/utils/type";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

async function createPost(post: FormInputPost) {
  const response = await fetch("/api/posts/create", {
    method: "POST",
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

const CreateBlog = () => {
  const [post, setPost] = useState<Post[]>([]);
  const router = useRouter();
  const handleCreatePost = async (formPost: FormInputPost) => {
    try {
      const newPost: Post = {
        id: uuidv4(),
        title: formPost.title,
        content: formPost.content,
        createdAt: new Date(),
        updateAt: new Date(),
        tagId: formPost.tag?.id || null,
      };
      await createPost(newPost);
      setPost((prevPosts) => [...prevPosts, newPost]);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout pageTitle="Create Post">
      <h2 className="text-3xl text-center">Create Post</h2>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </Layout>
  );
};

export default CreateBlog;
