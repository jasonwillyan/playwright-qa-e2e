export interface Placeholders {
  username: string;
  password: string;
}

export interface Selectors {
  login: {
    title: string;
    logo: string[];
    placeholders: Placeholders;
    forgotPasswordLink: string;
    orangeHRMLink: string;
    socialLinks: string[];
  };
}