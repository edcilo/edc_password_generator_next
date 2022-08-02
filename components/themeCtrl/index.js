import Icon from "@ant-design/icons"
import { Switch } from "antd"
import { useTheme } from "next-themes"
import sun from "./sun"
import moon from "./moon"

const EdcThemeCtrl = () => {
  const { theme, setTheme } = useTheme()

  const changeHandler = (checked) => {
    if (checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <Switch
      checkedChildren={<Icon component={moon} />}
      unCheckedChildren={<Icon component={sun} />}
      onChange={changeHandler}
    />
  )
}

export default EdcThemeCtrl
