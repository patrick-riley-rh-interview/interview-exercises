export default function AgeConverterFilter () {
  return function (employees) {
    employees.map((e) => {
      let ageDiffMs = Date.now() - (e.dob * 1000);
      let ageDate = new Date(ageDiffMs); //time from epoch
      e.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    });

    return employees;
  };
}