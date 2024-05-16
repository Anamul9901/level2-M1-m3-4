{
  // tarnary operator || optional chaining || nullish coalescing operator

  const age: number = 15;
  if (age >= 18) {
    // console.log("adult1");
  } else {
    // console.log("not adult1");
  }

  const isAdult = age >= 18 ? "adult1" : "not adult2";
  //   console.log(isAdult);

  //nullish coalescing operator
  // null / undefined ---> decision making

//   const isAuthenticated = null;
  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest1"; // only null ba undefined er khetre Guest1 asbe.
  const result2 = isAuthenticated ? isAuthenticated : "Guest2";

  console.log({ result1 }, { result2 });
}
