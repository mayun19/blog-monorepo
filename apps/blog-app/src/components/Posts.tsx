import React from "react";
import type { Post } from "@prisma/client";

const Posts = ({postList}: {postList: Post[]}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-10">
      {/* {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
    </div>
  );
};

export default Posts;