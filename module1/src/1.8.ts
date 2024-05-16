{
  // destructuring

  const user = {
    id: 23,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "2334234",
    address: "Uganda",
  };
  const {
    contactNo,
    name: { middleName: midNam },
  } = user;

  // array destructuring
  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

  //   const [a, b, bestFriend] = myFriends;
  //   const [, , bestFriend] = myFriends;
  const [, , bestFriend, ...rest] = myFriends; //rest er mije bestFriend(ross) er porer gula thakbe
}
