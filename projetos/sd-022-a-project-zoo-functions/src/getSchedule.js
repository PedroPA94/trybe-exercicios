const data = require('../data/zoo_data');

function checkIfAnimal(possibleAnimal) {
  const animals = [...data.species.map(({ name }) => name)];
  return animals.includes(possibleAnimal);
}

function checkIfDay(possibleDay) {
  const days = Object.keys(data.hours);
  return days.includes(possibleDay);
}

function getWorkingHours() {
  const days = Object.entries(data.hours).reduce((acc, cur) => {
    const { open, close } = cur[1];
    const animals = data.species.filter(({ availability }) => availability.includes(cur[0]))
      .map(({ name }) => name);
    if (cur[0] === 'Monday') {
      acc[cur[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[cur[0]] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animals,
      };
    }
    return acc;
  }, {});
  return days;
}

function getSchedule(scheduleTarget) {
  if (checkIfAnimal(scheduleTarget)) {
    const { availability } = data.species.find(({ name }) => name === scheduleTarget);
    return [...availability];
  }
  const workingHours = getWorkingHours();
  if (checkIfDay(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = { ...workingHours[scheduleTarget] };
    return result;
  }
  return workingHours;
}

module.exports = getSchedule;
