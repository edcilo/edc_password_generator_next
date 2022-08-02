import Icon from "@ant-design/icons"
import { Switch } from "antd"

import sun from "./sun"
import moon from "./moon"

const EdcThemeCtrl = ({ onChange }) => {
  return (
    <Switch
      checkedChildren={<Icon component={moon} />}
      unCheckedChildren={<Icon component={sun} />}
      onChange={(checked) => onChange(checked ? "dark" : "light")}
    />
  )
}

export default EdcThemeCtrl
