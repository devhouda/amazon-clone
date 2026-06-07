import { formatCurrency } from "../scripts/utils/money";

console.log("converts cents into dollars");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}
