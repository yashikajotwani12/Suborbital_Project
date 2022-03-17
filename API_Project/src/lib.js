import { log } from "@suborbital/runnable";

export const run = (input) => {
  let message = "Hello, here is some data to show you, Have a good day learning this " + input;

  log.info(message);
  return message;
};


