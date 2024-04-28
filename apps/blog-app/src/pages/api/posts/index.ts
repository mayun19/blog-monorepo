import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/prisma";
import { ResponseData } from "@/utils/type";

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
      }; 
      res.status(500).json(responseData);
    }
}
