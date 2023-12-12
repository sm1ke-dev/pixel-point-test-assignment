export const SEND_STATUS: "Success" | "Error" = "Error";

export const EMAIL_VALIDATION = {
  pattern:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  maxLength: 30,
  messages: {
    noEmail: "Email is a required field",
    invalid: "Enter the correct email",
    tooLong: "Email is too long",
  },
};
