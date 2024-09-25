"use client";
import useFcmToken from "@/hooks/useFcmToken";
import React from "react";

export default function NotificationHeader({
  userID,
}: {
  userID: string | undefined;
}) {
  const { token, notificationPermissionStatus } = useFcmToken({
    userMail: userID,
  });
  return (
    <div className="text-lg text-center">
      <h2>
        Recibirá una notificación de los eventos que tengas guardados, 24hs
        antes del mismo
      </h2>
      <h3>Asegurese de haberle brindado permisos a la pagina</h3>
      <h4 className="text-base text-text-500 dark:text-text-200">
        Permisos:{" "}
        <span className={`${notificationPermissionStatus==="granted"?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"} font-semibold`}>
          {notificationPermissionStatus === "granted"
            ? "permitido"
            : "denegado"}
        </span>
      </h4>
    </div>
  );
}
