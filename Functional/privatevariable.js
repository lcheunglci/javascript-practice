/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => {
      _job = newJob;
    },
    setAge: (newAge) => {
      _age = newAge;
    },
    setName: (newName) => {
      _name = newName;
    },
  };
};

const me = Person({ name: 'John', age: 25, job: 'Developer' });
console.log(me.getName());
// me._name // this returns undefined
me.setJob('senior developer');
console.log(me.getJob());
