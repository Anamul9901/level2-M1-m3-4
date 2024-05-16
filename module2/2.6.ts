{
  // constraints

  const addCoutseToStudent = <
    T extends { id: number; name: string; email: string } // extends e je type gula ase oigula must thakte hobe
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCoutseToStudent({
    id: 23,
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCoutseToStudent({
    id: 24,
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });

  //
}
