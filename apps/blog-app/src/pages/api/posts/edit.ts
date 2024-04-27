import { db } from "@/utils/prisma";
import { ResponseData } from "@/utils/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;
  const { title, content, tagId } = req.body;
    try {
      const updatePost = await db.post.update({
        where: { id: id as string },
        data: {
          title: title,
          content: content,
          tagId: tagId,
          updateAt: new Date(),
        },
      });
      res
        .status(200)
        .json({ message: "Post updated successfully", updatePost });
    } catch (error) {
      const responseData: ResponseData = {
        message: "Failed to fetch tags data",
      }; // Construct error response data
      res.status(500).json(responseData);
    }
}
