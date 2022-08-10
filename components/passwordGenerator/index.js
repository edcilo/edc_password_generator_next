import styles from "./styles.module.css"
import { Button, Card, Checkbox, Col, Row, Slider } from "antd"
import { useEffect, useState } from "react"
import Password from "../password"
import I18n from "../i18n"
import PasswordGenerator from "../../services/password_generator"
import { event } from "../../services/ga"

const generatePassword = ({
  length,
  uppercase,
  numbers,
  symbols,
  avoidSimilarCharacters,
}) => {
  const pg = new PasswordGenerator(length)

  pg.with_uppercase = uppercase
  pg.with_numbers = numbers
  pg.with_symbols = symbols
  pg.avoid_similar_characters = avoidSimilarCharacters

  return pg.generate()
}

const EdcPasswordGenerator = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(18)
  const [uppercase, setUppercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [avoidSimilarCharacters, setAvoidSimilarCharacters] = useState(false)

  const newPasswordHandler = () => {
    const newPassword = generatePassword({
      length,
      uppercase,
      numbers,
      symbols,
      avoidSimilarCharacters,
    })
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
        <h4>
          <I18n t="charLengthCtrl" /> ({length} <I18n t="dict.characters" />)
        </h4>
        <Slider
          aria-label="length password slider"
          role="slider"
          defaultValue={length}
          min={6}
          max={256}
          className={styles["edc-pg--slider"]}
          onChange={setLength}
        />
      </div>

      <ul className={styles["edc-pg--check-group"]}>
        <li className={styles["edc-pg--check-item"]}>
          <Checkbox
            aria-label="uppercase checkbox"
            role="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          >
            <I18n t="dict.uppercase" capitalize />
          </Checkbox>
        </li>

        <li className={styles["edc-pg--check-item"]}>
          <Checkbox
            aria-label="numbers checkbox"
            role="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          >
            <I18n t="dict.numbers" capitalize />
          </Checkbox>
        </li>

        <li className={styles["edc-pg--check-item"]}>
          <Checkbox
            aria-label="symbols checkbox"
            role="checkbox"
            className={styles["edc-pg--checkbox"]}
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          >
            <I18n t="dict.symbols" capitalize />
          </Checkbox>
        </li>
        <li className={styles["edc-pg--check-item"]}>
          <Checkbox
            aria-label="avoid similar characters"
            role="checkbox"
            className={styles["edc-pg--checkbox"]}
            checked={avoidSimilarCharacters}
            onChange={(e) => setAvoidSimilarCharacters(e.target.checked)}
          >
            <I18n t="avoidSimilarCharacters" capitalize />
          </Checkbox>
        </li>
      </ul>

      <Button
        aria-label="new password button"
        role="button"
        type="primary"
        className={styles["edc-pg--new-pass-btn"]}
        onClick={clickHandler}
        block
      >
        <I18n t="btnNewPassword" />
      </Button>
    </Card>
  )
}

export default EdcPasswordGenerator
