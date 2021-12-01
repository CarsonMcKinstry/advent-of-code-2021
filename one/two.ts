import { promises as fs } from "fs";
import path from "path";
import { print } from "../output";
import { countIncreases } from "./one";

async function readInput() {
  const file = await fs.readFile(
    path.join(__dirname, "./input-one.txt"),
    "utf-8"
  );

  return file.split("\n").map((n) => parseInt(n));
}

interface WindowSum {
  total: number;
}

function sumWindow(value: number, index: number, original: number[]): number {
  const [a, b, c] = [value].concat(original.slice(index + 1, index + 3));

  return a + b + c;
}

(async function main() {
  const input = await readInput();

  const out = input.map(sumWindow).filter((n) => !isNaN(n));

  print(1, 2, countIncreases(out));
})();
