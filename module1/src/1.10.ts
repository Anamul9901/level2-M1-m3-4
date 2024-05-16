{
  //
  // union types

  type FrontendDeveloper = " fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Anamul",
    gender: "male",
    bloodGroup: "O+",
  };

  type FrontendDeveloper2 = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper2 = {
    skills: string[];
    designation2: "backend Developer";
  };

  type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

  const FullstackDeveloper2: FullstackDeveloper2 = {
    skills: ["HTML", "CSS", "JavaScript"],
    designation1: "Frontend Developer",
    designation2: "backend Developer",
  };
  //
}
