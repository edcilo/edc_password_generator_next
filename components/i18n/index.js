import { useRouter } from "next/router"
import i18n from "./dict"

const I18n = ({ t, capitalize = false }) => {
  const router = useRouter()
  i18n.locale(router.locale)
  let text = i18n.t(t)

  const capitalizeFn = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  if (capitalize) {
    text = capitalizeFn(text)
  }

  return text
}

export default I18n
