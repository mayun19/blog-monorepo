import ButtonAction from "@/components/ButtonAction";
import Layout from "@/components/Layout";
import { db } from "@/utils/prisma";
import { BlogProps } from "@/utils/type";
import { GetServerSideProps } from "next";
import { FC } from "react";

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

const BlogDetailPage: FC<BlogProps> = ({ post }) => {

  return (
    <Layout pageTitle="Blog Detail">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold my-4">{post?.title}</h1>
          <ButtonAction postId={post?.id} />
        </div>
        <div className="badge badge-neutral">{post?.tag.name}</div>
        <p className="text-slate-700">{post?.content}</p>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
