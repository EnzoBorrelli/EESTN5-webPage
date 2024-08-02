"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthBtn from "./authBtn";
import Link from "next/link";

export default function UserBtn() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex mr-4 -ml-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar
            className="ring-text-200 bg-bg-200 ring-2 size-8"
          >
            <AvatarImage
              src={user?.name || "/imgs/userDefault.png"}
              alt={user?.name || "na"}
            />
            <AvatarFallback>
              {user?.name ? user?.name.slice(0, 2) : "NA"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-bg-100 text-text-100">
          <DropdownMenuLabel>
            {user?.name ? user.name : "usuario"}
          </DropdownMenuLabel>
          {session ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/recordatorios">Recordatorios</Link>
                </DropdownMenuItem>
                {user?.role === "admin" ? (
                  <DropdownMenuItem>
                    <Link href="/dashboard">Panel de control</Link>
                  </DropdownMenuItem>
                ) : (
                  ""
                )}
              </DropdownMenuGroup>
            </>
          ) : (
            ""
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <AuthBtn />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
