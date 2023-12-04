import { Selectors } from "../types/login.ts"

export const selectors: Selectors = {
  login: {
    title: ".orangehrm-login-slot h5",
    logo: [".orangehrm-login-branding img", ".orangehrm-login-logo img"],
    placeholders: {
      username: ".oxd-input[name='username']",
      password: ".oxd-input[name='password']",
    },
    forgotPasswordLink: ".orangehrm-login-forgot p",
    orangeHRMLink: ".orangehrm-copyright-wrapper p + p a",
    socialLinks: [
      ".orangehrm-login-footer-sm a[href*=linkedin]",
      ".orangehrm-login-footer-sm a[href*=facebook]",
      ".orangehrm-login-footer-sm a[href*=twitter]",
      ".orangehrm-login-footer-sm a[href*=youtube]",
    ],
  },
};
