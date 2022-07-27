import { Button, Card, Checkbox, Col, Row, Slider } from "antd"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import Password from "../password"
import PasswordGenerator from "../../services/password_generator"
import { event } from "../../services/ga"

const generatePassword = (length, uppercase, numbers, symbols) => {
  const pg = new PasswordGenerator(length)

  pg.with_uppercase = uppercase
  pg.with_numbers = numbers
  pg.with_symbols = symbols

  return pg.generate()
}

const EdcPasswordGenerator = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(18)
  const [uppercase, setUppercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const newPasswordHandler = () => {
    const newPassword = generatePassword(length, uppercase, numbers, symbols)
    setPassword(newPassword)
  }

  useEffect(newPasswordHandler, [length, uppercase, numbers, symbols])

  const clickHandler = () => {
    newPasswordHandler()
    event({
      action: "newPassword",
      category: "password_generator",
      label: "New password",
      value: "click button",
    })
  }

  return (
    <Card title={<Password password={password} />}>
      <div className={styles["edc-pg--slider-container"]}>
        <h4>Password length ({length} characters)</h4>
        <Slider
          defaultValue={length}
          min={6}
          max={256}
          className={styles["edc-pg--slider"]}
          onChange={setLength}
        />
      </div>

      <Row className={styles["edc-pg--checks"]}>
        <Col span={8}>
          <Checkbox
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          >
            Uppercase
          </Checkbox>
        </Col>

        <Col span={8}>
          <Checkbox
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          >
            Numbers
          </Checkbox>
        </Col>

        <Col span={8}>
          <Checkbox
            className={styles["edc-pg--checkbox"]}
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          >
            Symbols
          </Checkbox>
        </Col>
      </Row>

      <Button
        type="primary"
        className={styles["edc-pg--new-pass-btn"]}
        onClick={clickHandler}
        block
      >
        New password
      </Button>
    </Card>
  )
}

export default EdcPasswordGenerator
