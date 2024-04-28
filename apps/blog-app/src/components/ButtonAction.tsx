import { ButtonActionProps } from "@/utils/type";
import axios from "axios";
import { PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import React, { FC } from "react";
// import { MyLink } from "@repo/blog-ui/src/link";

const ButtonAction: FC<ButtonActionProps> = ({ postId }) => {
  async function DeletePost() {
    if (window.confirm("Do you want to delete this Post?")) {
      await axios.delete(`/api/posts/delete?id=${postId}`);
      router.push("/");
    }
  }
  return (
    <div className="flex gap-3">
      <Link href={`/blog/edit/${postId}`} className="btn btn-danger">
        <PencilLine /> Edit
      </Link>
      <button onClick={DeletePost} className="btn btn-error">
        <Trash2 strokeWidth={1.5} /> Delete Post
      </button>
      {/* <MyLink linkComponent={Link} href="/about">
        Click me!
      </MyLink> */}
    </div>
  );
};

export default ButtonAction;
