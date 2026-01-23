import { FormItemConfig } from "@/app/types/formItem";

export const SIGNUP_STEPS = {
  credentials: {
    id: "credentials",
    title: "Brand Account Credentials",
    order: 1,
  },
  company: {
    id: "company",
    title: "Company Details",
    order: 2,
  },
  payment: {
    id: "payment",
    title: "Add Payment",
    order: 3,
  },
} as const;

export const BUSINESS_TYPES = [
  { value: "startup", label: "Startup" },
  { value: "small_business", label: "Small Business" },
  { value: "enterprise", label: "Enterprise" },
  { value: "agency", label: "Agency" },
  { value: "individual", label: "Individual" },
];

export const INDUSTRIES = [
  { value: "fashion", label: "Fashion & Apparel" },
  { value: "tech", label: "Technology" },
  { value: "beauty", label: "Beauty & Cosmetics" },
  { value: "fitness", label: "Fitness & Wellness" },
  { value: "food", label: "Food & Beverage" },
  { value: "travel", label: "Travel & Hospitality" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
];

export const COUNTRY_CODES = [
  { value: "+1", label: "US", flag: "🇺🇸" },
  { value: "+44", label: "UK", flag: "🇬🇧" },
  { value: "+91", label: "IN", flag: "🇮🇳" },
];

export const SIGNUP_BENEFITS = [
  "Get 100 free credits",
  "Post campaigns. Pay-per-view only",
  "Pay-per-view only",
];

export const COMPANY_DETAILS_INFO = [
  "Tell us more about your brand",
  "We'll never share this data",
];

export const PAYMENT_INFO = [
  "Finally, secure your account with a payment method.",
  "We'll never charge you until you top up. You get 100 free credits to start.",
];

export const brandCredentialsFormItems: FormItemConfig[] = [
  {
    name: "companyName",
    label: "Company/Brand Name",
    type: "input",
    placeholder: "Enter Your Company Name",
    rules: [{ required: true }],
    colSpan: 2,
  },
  {
    name: "fullName",
    label: "Your Full Name",
    type: "input",
    placeholder: "Enter Your Full Name",
    rules: [{ required: true }],
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "Enter Your Email",
    rules: [{ required: true, type: "email" }],
  },
  {
    name: "password",
    label: "Create Password",
    type: "password",
    placeholder: "Enter Your Password",
    rules: [{ required: true, min: 8 }],
    helperText: "Min. 8 characters, including a number & symbol.",
    itemClassname: "mb-0!",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your Password",
    dependencies: ["password"],
    rules: [
      { required: true, message: "Please confirm your password" },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Passwords do not match"));
        },
      }),
    ],
    itemClassname: "mb-1!",
  },
];

export const companyDetailsFormItems: FormItemConfig[] = [
  {
    name: "businessType",
    label: "Business Type",
    type: "select",
    placeholder: "Select your type",
    options: BUSINESS_TYPES,
    rules: [{ required: true, message: "Business type is required" }],
  },
  {
    name: "industry",
    label: "Industry",
    type: "select",
    placeholder: "Select your industry",
    options: INDUSTRIES,
    rules: [{ required: true, message: "Industry is required" }],
  },
  {
    name: "website",
    label: "Website",
    type: "input",
    placeholder: "Paste a link to your website",
    itemClassname: "mb-0!",
    rules: [
      {
        pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
        message: "Please enter a valid website URL",
      },
    ],
    helperText: "Optional, but helps us verify your brand",
    colSpan: 2,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "phone",
    rules: [
      { required: true, message: "Phone number is required" },
      { min: 10, message: "Invalid phone number" },
    ],
    phoneProps: {
      country: "us",
    },
    colSpan: 2,
  },
  {
    name: "address",
    label: "Company Address",
    type: "input",
    placeholder: "Enter your company address",
    rules: [{ required: true, message: "Address is required" }],
    colSpan: 2,
  },
];
