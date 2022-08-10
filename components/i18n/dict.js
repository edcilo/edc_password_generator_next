import rosetta from "rosetta"

const i18n = rosetta({
  en: {
    title: "Password Generator",
    subtitle: "Generate a secure password!",
    disclaimer:
      "This tool work on the client side. The passwords you generate are never sent across the web. Please be careful where you paste them.",
    btnCopy: "Click to copy!",
    btnNewPassword: "New password",
    charLengthCtrl: "Password length",
    avoidSimilarCharacters: "Avoid similar characters",
    dict: {
      characters: "characters",
      numbers: "numbers",
      symbols: "symbols",
      uppercase: "uppercase",
    },
  },
  es: {
    title: "Generador de contraseñas",
    subtitle: "Generar una contraseña segura!",
    disclaimer:
      "Esta herramienta funciona del lado del cliente. Las contraseñas generadas no se envian a internet. No compartas tus contraseñas.",
    btnCopy: "Haz clic para copiar!",
    btnNewPassword: "Generar contraseña",
    charLengthCtrl: "Longitud",
    avoidSimilarCharacters: "Evitar caracteres similares",
    dict: {
      characters: "letras",
      numbers: "números",
      symbols: "signos",
      uppercase: "mayúsculas",
    },
  },
})

export default i18n
