export default function NotificationHeader() {
  return (
    <div className="text-base md:text-lg text-center">
      <h2>
        Recibirá una notificación de los eventos que tengas guardados, 24hs
        antes del mismo
      </h2>
      <h3>Asegurese de haberle brindado permisos a la pagina</h3>
      <h4 className="text-base text-text-500 dark:text-text-200">
        Permisos:
        <span className="text-green-600 dark:text-green-400">permitido</span>
      </h4>
    </div>
  );
}
