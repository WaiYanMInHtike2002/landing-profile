import { transporter } from "@/config/nodeMailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { name, gmail, content } = req.body;
    const valid = name && gmail && content;
    if (!valid) return res.status(400).send("Bad request.");
    try {
      await transporter.sendMail({
        from: `"${name}" <${gmail}>`,
        to: "waiyanminhtike10102002@gmail.com",
        subject: "For Work",
        text: content,
        html: `<b>${content}</b>`,
      });
    } catch (error) {
      console.log("Error", error);
    }

    res.status(200).json("ok post");
  }
  res.status(400).send("Bad request.");
}
