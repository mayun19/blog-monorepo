import { FC } from "react";
import Link from "next/link";
import { PostData } from "@/utils/type";

const PostCard: FC<PostData> = ({ post }) => {
  const { title, content, tag } = post;
  return (
    <div className="card w-full bg-base-100 shadow-md image-full transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-4">
        <h1 className="card-title">{title}</h1>
        <p className="line-clamp-5">{content}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-neutral">{tag?.name}</div>
          <Link href={`/blog/${post.id}`} className="hover:underline">
            Read more ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
