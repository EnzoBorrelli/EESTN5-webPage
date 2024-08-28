import { RedesSociales } from "@/components/navLinks";
import dayjs from "dayjs";
import React from "react";

export default function Contacto() {
  const event = {
    id: "aaaaa",
    title: "Graduacion 2024",
    date: "2024-12-17",
    startTime: "1000",
    finishTime: "1100",
  };
  return (
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="0"
      border={0}
      style={{
        backgroundColor: "#050A26",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
      }}
    >
      <tbody>
        <tr>
          <td>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Próximo evento en 24hs
            </h1>
            <table
              width="100%"
              cellSpacing="0"
              cellPadding="10"
              border={0}
              style={{
                backgroundColor: "#e6e7ea",
                borderRadius: "8px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      backgroundColor: "#121940",
                      padding: "10px",
                    }}
                  >
                    {event.title}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#666666",
                      padding: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#363636",
                        marginBottom: "20px",
                      }}
                    >
                      Solo un pequeño recordatorio, este evento se aproxima! Te
                      esperamos
                    </p>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <li
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#0f33a0",
                        }}
                      >
                        {dayjs(event.date).format("DD/MM/YYYY")}
                      </li>
                      <li>
                        {event.startTime.slice(0, 2) +
                          ":" +
                          event.startTime.slice(2)}{" "}
                        -{" "}
                        {event.finishTime.slice(0, 2) +
                          ":" +
                          event.finishTime.slice(2)}
                      </li>
                      <li>EESTN5 '2 de Abril', Temperley</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#121940",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#ffffff",
                        fontSize: "14px",
                      }}
                    >
                      Visita nuestra pagina para descubrir mas eventos como este
                    </p>
                    <a
                      href="https://eestn-5-web-page.vercel.app/"
                      target="_blank"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#E6BF40",
                        color: "#050A26",
                        textDecoration: "none",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        marginBottom: "20px",
                      }}
                    >
                      Visitar página
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style={{
                fontSize: "12px",
                color: "#cccccc",
                marginTop: "20px",
              }}
            >
              Si desea más detalles, puede visitar nuestras redes sociales, o
              visitar la insitución
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#cccccc",
              }}
            >
              Pringles 27 e/ España y Meeks, Temperley, Argentina
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#666666",
                marginTop: "10px",
              }}
            >
              © 2024 EEST N°5 '2 de Abril'. Derechos reservados.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
