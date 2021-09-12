import { persons } from "../components/App";

const lightColors = [
  "#c0392b",
  "#f39c12",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#e74c3c",
  "#1abc9c",
  "#2c3e50",
  "#95a5a6",
  "#7f8c8d",
  "#ecf0f1",
];
export function getColor(person: string | null) {
  const index = persons.indexOf(person ?? "");
  return lightColors.at(index);
}
