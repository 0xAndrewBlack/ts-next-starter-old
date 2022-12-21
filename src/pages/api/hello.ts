// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // prettier-ignore
  const { method, query: { name } } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ message: `Hello ${name ? name : "World"}!` });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
