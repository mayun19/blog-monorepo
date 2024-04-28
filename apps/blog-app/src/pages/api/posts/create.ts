import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const postData = JSON.parse(req.body);
  const savedData = await db.post.create({
    data: postData,
  });

  res.json(savedData);
}
