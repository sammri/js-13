const productivity = {
  Vika: 4,
  Vova: 5,
  Artem: 2,
  Guga: 6,
};

const findBestEmployee = (employees) => {
  let bestName = "";
  let maxTask = 0;
  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTask) {
      maxTask = tasks;
      bestName = name;
    }
  }
  console.log(`Лучший работник - ${bestName}, он выполнил аж ${maxTask} задач!`);
};
findBestEmployee(productivity);

