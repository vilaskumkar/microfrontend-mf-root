import { User, UserUpdatedEvent } from "../types";

export const USER_UPDATED_EVENT = "user:updated";

export const dispatchUserUpdated = (user: User): void => {
  const event = new CustomEvent(USER_UPDATED_EVENT, {
    detail: user,
  });
  window.dispatchEvent(event);
};

export const listenForUserUpdates = (
  callback: (event: UserUpdatedEvent) => void
): (() => void) => {
  const handler = (event: Event) => {
    callback(event as UserUpdatedEvent);
  };

  window.addEventListener(USER_UPDATED_EVENT, handler);

  return () => {
    window.removeEventListener(USER_UPDATED_EVENT, handler);
  };
};

export const createNextJSUser = (id: number, name: string): User => ({
  id,
  name: `Next.js ${name}`,
  email: `${name.toLowerCase()}@nextjs-mfe.com`,
});
