import NextAuth from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

//ref: https://authjs.dev/guides/role-based-access-control#with-database

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };

//cambiar credeniales personales por credenciales de la escuela
