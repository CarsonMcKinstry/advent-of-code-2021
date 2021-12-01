import { promises as fs } from "fs";
import path from "path";
import { print } from "../output";

async function readInput() {
  const file = await fs.readFile(
    path.join(__dirname, "./input-one.txt"),
    "utf-8"
  );

  return file.split("\n").map((n) => parseInt(n));
}

export const countIncreases = (input: number[]) =>
  input.reduce<number>((total, current, index, orig) => {
    if (index === 0) {
      return total;
    }

    const prev = orig[index - 1];

    if (prev < current) {
      return total + 1;
    }

    return total;
  }, 0);

(async function main() {
  const input = await readInput();

  const increases = countIncreases(input);

  print(1, 1, increases);
})();
