const salary = {
  Vika: 2500,
  Vova: 3000,
  Artem: 8000,
  Guga: 700,
};

const countTotalSalary = ({ ...employees }) => {
  let allSalary = 0;
  for (const amount of Object.values(employees)) {
    allSalary += amount;
  }
  console.log(`Вся зп составляет ${allSalary}`);
};

countTotalSalary(salary);
