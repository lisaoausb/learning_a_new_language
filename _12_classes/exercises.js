class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

class UserBase {
  constructor(names) {
    this.names = names;
  }

  count() {
    return this.names.length;
  }

  getNames() {
    return this.names.map((user) => user.name);
  }

  getIntroductions() {
    return this.names.map((user) => `Hi, my name is ${user.name}`);
  }
}

module.exports = { User, UserBase };

userBase = new UserBase(users);
console.log(userBase.getNames());
console.log(userBase.getIntroductions());
