import { FC } from "react";
import { GetServerSideProps } from "next";
import { db } from "@/utils/prisma";
import { BlogProps } from "@/utils/type";
import ButtonAction from "@/components/ButtonAction";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import formatDate from "@/utils/formatDate";

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
      createdAt: true,
    },
  });
  const formattedPostContent = {
    ...postContent,
    createdAt: postContent?.createdAt.toISOString(),
  };

  return {
    props: {
      postContent: formattedPostContent,
    },
  };
};

const BlogDetailPage: FC<BlogProps> = ({ postContent }) => {
  return (
    <Layout pageTitle="Blog Detail">
      <div className="container">
        <Breadcrumb
          linkHref="/"
          ariaLabel="Back to blog list"
          contentBreadcrumb="Back to blog list"
        />
        <div className="mb-8">
          <h1 className="md:text-3xl text-2xl font-serif font font-medium text-pretty mb-2">
            {postContent?.title}
          </h1>
          <p className="text-foreground/60 md:text-sm text-xs">
            Published at {formatDate(postContent?.createdAt)} by Mutiara A'yun
          </p>
        </div>
        <ButtonAction postId={postContent?.id} />
        <div className="badge badge-neutral my-2">{postContent?.tag.name}</div>
        <p className="text-slate-600 mt-3">{postContent?.content}</p>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
