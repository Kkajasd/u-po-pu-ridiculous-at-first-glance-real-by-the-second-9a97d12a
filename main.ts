import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (<=200 chars) pitching a bizarre startup idea that is
// ridiculous at first glance and a real business on the second look:
// renting a home Wi-Fi network's name to the local cafe as ad space.
const sentence =
  "We rent your Wi-Fi network's name to the café downstairs, because every neighbour hunting for signal reads it a dozen times a day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
