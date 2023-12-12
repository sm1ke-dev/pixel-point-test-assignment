import React from "react";
import styles from "./EmailForm.module.scss";
import { EMAIL_VALIDATION, SEND_STATUS } from "../../utils/constants";
import Loader from "../Loader/Loader";
import error from "../../images/error.svg";
import success from "../../images/success.svg";

const InputEmail: React.FC = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [sendStatus, setSendStatus] = React.useState("");

  React.useEffect(() => {
    if (sendStatus === "Error") {
      setValue("Oops! Something went wrong");
    }
  }, [sendStatus]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendStatus("");
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value === "") {
      setErrorMessage(EMAIL_VALIDATION.messages.noEmail);
    } else if (!EMAIL_VALIDATION.pattern.test(value)) {
      setErrorMessage(EMAIL_VALIDATION.messages.invalid);
    } else if (value.length > EMAIL_VALIDATION.maxLength) {
      setErrorMessage(EMAIL_VALIDATION.messages.tooLong);
    } else {
      setErrorMessage("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSendStatus(SEND_STATUS);
      }, 3000);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.form__input}
        placeholder="Your business email..."
        value={value}
        onChange={onChange}
        disabled={isLoading || sendStatus === "Success"}
      />
      <button
        className={`${styles.form__button} ${
          isLoading && sendStatus === ""
            ? styles.form__button_loading
            : !isLoading && sendStatus === "Success"
            ? styles.form__button_success
            : !isLoading && sendStatus === "Error"
            ? styles.form__button_error
            : ""
        }`}
        type="submit"
        disabled={isLoading || sendStatus !== ""}
      >
        {!isLoading && sendStatus === "" ? (
          "Free Trial"
        ) : isLoading && sendStatus === "" ? (
          <Loader />
        ) : !isLoading && sendStatus === "Success" ? (
          <img src={success} alt="success" />
        ) : (
          <img src={error} alt="error" />
        )}
      </button>
      {errorMessage !== "" && (
        <p className={styles.form__error}>{errorMessage}</p>
      )}
    </form>
  );
};

export default InputEmail;
