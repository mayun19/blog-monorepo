import { FC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
import { Trash2 } from "lucide-react";
import { db } from "@/utils/prisma";
import { BlogProps } from "@/utils/type";
import { ButtonAction } from "@repo/blog-ui/buttonAction";
import Breadcrumb from "@repo/blog-ui/breadcrumb";
import formatDate from "@/utils/formatDate";
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
  async function DeletePost() {
    if (window.confirm("Do you want to delete this Post?")) {
      await axios.delete(`/api/posts/delete?id=${postContent?.id}`);
      router.push("/");
    }
  }

  return (
    <Layout pageTitle="Blog Detail">
      <div className="container">
        <Breadcrumb
          linkComponent={Link}
          linkHref="/"
          ariaLabel="Back to blog list"
          contentBreadcrumb="Back to blog list"
          breadcrumbClassName="text-base text-foreground/70 flex gap-1 items-center mb-4"
        />
        <div className="mb-8">
          <h1 className="md:text-3xl text-2xl font-serif font font-medium text-pretty mb-2">
            {postContent?.title}
          </h1>
          <p className="text-foreground/60 md:text-sm text-xs">
            Published at {formatDate(postContent?.createdAt)} by Mutiara A'yun
          </p>
        </div>

        {/* <ButtonAction postId={postContent?.id} /> */}
        <ButtonAction
          typeButton={"button"}
          buttonActionWrapper="flex gap-3"
          linkComponent={Link}
          linkHref={`/blog/edit/${postContent?.id}`}
          buttonActionClassName="btn btn-danger"
          buttonClassName="btn btn-error"
          actionButton={DeletePost}>
          <Trash2 strokeWidth={1.5} /> Delete
        </ButtonAction>
        <div className="badge badge-neutral my-2">{postContent?.tag.name}</div>
        <p className="text-slate-600 mt-3">{postContent?.content}</p>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
