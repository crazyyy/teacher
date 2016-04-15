class Task {
  constructor(title = '') {
    this.title = title,
    this.done = false,
    console.log(`Create task ${this.title} `)
  }

  complete() {
    this.done = true;
    console.log(`Task ${this.title} is done!`)
  }
}

let task = new Task('Clean the room');
let task2 = new Task('Buy a apple')


console.log(task.title);
console.log(task2.title);

task2.complete();
