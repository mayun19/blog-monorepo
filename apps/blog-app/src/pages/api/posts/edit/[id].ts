import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/prisma";
import { ResponseData } from "@/utils/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  const { title, content, tag } = req.body;
  try {
    const updatePost = await db.post.update({
      where: { id: id as string },
      data: {
        title: title,
        content: content,
        tagId: tag.id,
        updateAt: new Date(),
      },
    });

    res.status(200).json({ message: "Post updated successfully", updatePost });
  } catch (error) {
    const responseData: ResponseData = {
      message: "Failed to fetch tags data",
      error,
    };
    res.status(500).json(responseData);
  }
}
