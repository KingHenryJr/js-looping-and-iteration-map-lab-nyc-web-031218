function lowerCaseDrivers(drivers) {
  const newDrivers  = drivers.map(x => x.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
   const first = name.split(' ')[0];
   const last = name.split(' ')[1];
   return {firstName: first, lastName: last};
  });
};

function attributesToPhrase(drivers) {
  return drivers.map(function(info) {
    const name = info.name;
    const hometown = info.hometown;
    return `${name} is from ${hometown}`
  });
};
