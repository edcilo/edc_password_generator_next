import styles from "./styles.module.css"
import { CopyOutlined } from "@ant-design/icons"
import { Button, Input, Tooltip, notification } from "antd"
import I18n from "../i18n"
import { event } from "../../services/ga"

const Password = ({ password }) => {
  const copyToClipboard = (password) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      event({
        action: "copy_password",
        category: "password_generator",
        label: "Copy password",
        value: "click button",
      })
      notification.open({
        icon: <CopyOutlined />,
        message: "Copied!",
        description: "The password has been copied to your clipboard.",
      })
      return navigator.clipboard.writeText(password)
    }
    return Promise.reject(new Error("The Clipboard API is not available."))
  }

  return (
    <div className={styles["edc-pg--password-ctrls"]}>
      <div className={styles["edc-pg--password"]}>
        <Input value={password} readOnly />
      </div>

      <Tooltip title={<I18n t="btnCopy" />}>
        <Button
          type="primary"
          className={styles["edc-pg--password-copy"]}
          onClick={() => copyToClipboard(password)}
        >
          <CopyOutlined />
        </Button>
      </Tooltip>
    </div>
  )
}

export default Password
