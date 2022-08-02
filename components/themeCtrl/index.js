import Icon from "@ant-design/icons"
import { Switch } from "antd"
import { useEffect, useState } from "react"

import sun from "./sun"
import moon from "./moon"

const EdcThemeCtrl = ({ onChange }) => {
  const [theme, setTheme] = useState(false)

  const changeHandler = (checked) => {
    setTheme(checked ? "dark" : "light")
  }

  useEffect(() => {
    onChange(theme)
  }, [theme])

  useEffect(() => {
    const event = window.matchMedia("(prefers-color-scheme: dark)")
    event.addEventListener("change", (e) => changeHandler(e.matches))
    changeHandler(event.matches)
  }, [])

  return (
    <Switch
      checked={theme === "dark"}
      checkedChildren={<Icon component={moon} />}
      unCheckedChildren={<Icon component={sun} />}
      onChange={changeHandler}
    />
  )
}

export default EdcThemeCtrl
