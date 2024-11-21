import nodeMailer from "nodemailer";
import { config } from "./config";

export const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email,
    pass: config.password,
  },
});
