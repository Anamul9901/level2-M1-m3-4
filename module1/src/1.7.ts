{
  // spread operator
  // rest operator
  // distructuring

  // learn spred operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahdid", "Rahat"];

  //   bros1.push(bros2);  //wrong
  bros1.push(...bros2); // right

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  };
  greetFriends("Abul", "kabul", "babul");

  const greetFriend = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriend("abul", "kaubl", ".....");
}
