const weirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
  "ebong",
];

for (const expression of weirdExpressions) {
  let result = expression;
  for (let i = 1; i < expression.length; i++) {
    if (
      expression[i] === "(" &&
      expression[i - 1] >= "a" &&
      expression[i - 1] <= "z"
    ) {
      result = result.substring(0, i) + " " + result.substring(i);
    }
  }
  for (let i = 1; i < expression.length; i++) {
    if (
      expression[i] === ")" &&
      expression[i + 1] >= "a" &&
      expression[i + 1] <= "z"
    ) {
      result = result.substring(0, i + 1) + " " + result.substring(i + 1);
    }
  }
  let res2 = result.split(" ");
  result.split(" ").forEach((element, ind) => {
    if (element === "othoba" && ind & 1) {
      res2[ind] = "||";
    } else if (element === "ebong" && ind & 1) {
      res2[ind] = "&&";
    }
  });
  console.log(res2.join(" "));
}
