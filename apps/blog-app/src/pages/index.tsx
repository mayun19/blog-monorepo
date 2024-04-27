import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { db } from "@/utils/prisma";
import { PostProps } from "@/utils/type";
import { GetServerSideProps } from "next";

export default function Home({ posts }: PostProps) {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between lg:py-12 py-5 pt-5">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold">Blog</h1>
        <h2>Browse Article</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-10">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      posts,
    },
  };
};
