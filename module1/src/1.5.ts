// Reference type --> Object

const user: {
  company: "Programming Hero"; // type --> literal types (value te same data dete hobe)
  firstName: string;
  middleName?: string; //optional type
  readonly lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Mezbaul",
  lastName: "Persian",
  isMarried: true,
};

// user.company = 'Ph'  // change kora jane nah. karon fixd kora
user.firstName = 'Anamul' //change kora jabe
// user.lastName = 'Haque'  // change kora jabe nah. karon readonly kora
