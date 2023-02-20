import { TranslationOutlined } from "@ant-design/icons"
import { Button, Dropdown } from "antd"
import { useRouter } from "next/router"
import Link from "next/link"

const EdcLocaleCtrl = ({ ...props }) => {
  const router = useRouter()

  const items = [
    {
      key: "en",
      label: (
        <Link aria-label="English locale" role="link" href="/" locale="en">
          English
        </Link>
      ),
    },
    {
      key: "es",
      label: (
        <Link aria-label="Spanish locale" role="link" href="/" locale="es">
          Español
        </Link>
      ),
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button
        {...props}
        aria-label="change locale menu"
        size="small"
        icon={<TranslationOutlined />}
        ghost
      >
        {router.locale}
      </Button>
    </Dropdown>
  )
}

export default EdcLocaleCtrl
