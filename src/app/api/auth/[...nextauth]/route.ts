import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

/* 
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions :NextAuthOptions= {
  providers: [
    GoogleProvider({
      clientId: "1085105114899-nen6tps7v9tec9mrr1duh7ku7pl3alft.apps.googleusercontent.com", 
      clientSecret:"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",
    }),
  ],
  secret: 'fkldsanvieihfldsjkjkfsdljioth', 
};
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
