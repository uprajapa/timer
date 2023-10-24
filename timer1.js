let array = process.argv.splice(2);
if (array.length === 0) {
  process.stdout.write('Please provide input');
}
array.sort();
for (const arr of array) {
  if (arr < 0 || typeof arr !== "number") {
    process.stdout.write('Please provide valid input');
    return;
  }
  setTimeout(() => {
  }, `${arr}000`);
}