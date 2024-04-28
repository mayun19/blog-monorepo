import { FC } from "react";
import { GetServerSideProps } from "next";
import { db } from "@/utils/prisma";
import { BlogProps } from "@/utils/type";
import ButtonAction from "@/components/ButtonAction";
import Layout from "@/components/Layout";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const postContent = await db.post.findFirst({
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
      postContent,
    },
  };
};

const BlogDetailPage: FC<BlogProps> = ({ postContent }) => {
  return (
    <Layout pageTitle="Blog Detail">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold my-4">{postContent?.title}</h1>
          <ButtonAction postId={postContent?.id} />
        </div>
        <div className="badge badge-neutral">{postContent?.tag.name}</div>
        <p className="text-slate-700">{postContent?.content}</p>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
