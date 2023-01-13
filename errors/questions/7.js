try {
  const name = "jonny";
  name.push("apple");
} catch (error) {
  console.log(error);
}

// referenceerror, string has no push method
// wrong. typeerror
