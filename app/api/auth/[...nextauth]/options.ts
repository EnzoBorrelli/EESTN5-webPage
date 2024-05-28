import type { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      // realziamos el inicio de sesion mediante el proveedor de google
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile: GoogleProfile) {
        // agregamos al perfil comun, la propiedad role
        return {
          id: String(profile.id),
          role: profile.role ?? "user",
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Usuario:",
          type: "text",
          placeholder: "tu nombre",
        },
        password: {
          label: "Contraseña:",
          placeholder: "tu contraseña",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "24",
          name: "Endy",
          password: "12345",
          role: "admin",
          email: "Endy@universe.com",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP4FPFGMSR9OtCwvRZsDi22YUTQn817VcUantD_u7pw&s",
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // hacemos que el rol del usuario persista mediante cookies
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
