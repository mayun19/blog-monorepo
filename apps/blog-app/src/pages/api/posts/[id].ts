import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/prisma";
import { ResponseData } from "@/utils/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const post = await db.post.findFirst({
      where: {
        id: id as string,
      },
      select: {
        id: true,
        title: true,
        content: true,
        tag: true,
        createdAt: true,
      },
    });
    
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ post });
  } catch (error) {
    const responseData: ResponseData = {
      message: "Failed to fetch data", error
    }; 
    res.status(500).json(responseData);
  }
}
