export interface User {
  id: number;
  name: string;
  email?: string;
}

export interface AppProps {
  selector?: string;
  initialUser?: User;
}

export interface MFEConfig {
  name: string;
  port: number;
  url: string;
}

export type UserUpdatedEvent = CustomEvent<User>;

export interface NextJSMFEConfig {
  port: number;
  name: string;
  version: string;
  features: string[];
}
