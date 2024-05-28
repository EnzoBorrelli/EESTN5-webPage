import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    /*comprobamos el rol del usuario mediante el token. Si el usuario esta en la url /dashboard , 
    pero su rol no es 'admin', lo enviamos a la url /denegado*/
    if (
      request.nextUrl.pathname.startsWith("/dashboard") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denegado", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/dashboard"] };
