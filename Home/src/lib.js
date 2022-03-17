import { log } from "@suborbital/runnable";
import { http } from "@suborbital/runnable"

export const run = () => {
  const response = http.get("https://pokeapi.co/api/v2/pokemon/ditto%22");
  log.info(response.text());
  return response.text();
};
