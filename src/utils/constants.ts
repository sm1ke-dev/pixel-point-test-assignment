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

export const FEATURES_LIST = [
  {
    id: 1,
    title: "3x",
    subtitle: "Faster Analysis Cycles",
    description:
      "Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.",
  },
  {
    id: 2,
    title: "10%+",
    subtitle: "Savings on Costs",
    description:
      "Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.",
  },
  {
    id: 3,
    title: "30",
    subtitle: "Day Setup",
    description:
      "Implement swiftly with straightforward, no-code processes and ready-to-use integrations.",
  },
];
