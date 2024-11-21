interface Inti {
  apiUrl: string;
  email: string;
  password: string;
}
export const config: Inti = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  email: process.env.EMAIL || "",
  password: process.env.EMAIL_PASSWORD || "",
};
