import {Button, Input, notification} from 'antd'
import {CopyOutlined} from '@ant-design/icons'
import styles from './styles.module.css'
import { event } from "../../services/ga"


const Password = ({ password }) => {
    const copy_to_clipboard = (password) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            event({ 
                action: "copy_password",
                category: "password_generator",
                label: "Copy password",
                value: "click button",
            })
            notification.open({
                icon: <CopyOutlined />,
                message: 'Copied!',
                description: 'The password has been copied to your clipboard.',
            })
            return navigator.clipboard.writeText(password)
        }
        return Promise.reject('The Clipboard API is not available.')
    }

    return (
        <div className={styles['edc-pg--password-ctrls']}>
            <div className={styles['edc-pg--password']}>
                <Input value={password} readOnly />
            </div>
            <Button
                type="primary"
                className={styles['edc-pg--password-copy']}
                onClick={() => copy_to_clipboard(password)}
            >
                <CopyOutlined />
            </Button>
        </div>
    )
}

export default Password
