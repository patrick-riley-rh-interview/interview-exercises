export default function DateConverterFilter () {
  return function (employees) {
    employees.map((e) => {
      if(e.dob) {
        e.date = new Date(e.dob * 1000);
      }
    });

    return employees;
  };
}