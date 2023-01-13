try {
  const letters = "abc";
  letters(); // <- How would you describe what we're trying to do to letters here ? :🤔
} catch (error) {
  console.log(error, "<--- error");
}

// typeerror, invoking a function but it isn't one
