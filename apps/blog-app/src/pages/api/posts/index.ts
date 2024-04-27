import { db } from "@/utils/prisma";
import { ResponseData } from "@/utils/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    try {
      const posts = await db.post.findMany();
      const responseData: ResponseData = { posts };
      res.status(200).json(responseData);
    } catch (error) {
      const responseData: ResponseData = {
        message: "Failed to fetch tags data",
      }; // Construct error response data
      res.status(500).json(responseData);
    }
}
