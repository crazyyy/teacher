class Task {

  constructor(title = '') {
    this.title = title,
      this._done = false,
      Task.count += 1,
      console.log(`Create task ${this.title} `)
  }

  get done() {
    return this._done === true ? 'Done!' : 'Not done!'
  }
  
  set done(value) {
    if (value !== undefined && typeof value === 'bollean' ) {
      this._done = value;
    } else {
      console.error('Error!')
    }
  }

  complete() {
    this._done = 1;
    console.log(`Task ${this.title} is done!`)
  }

  static getDefaultTitle() {
    return 'Tasker';
  }

}

Task.count = 0;

let task = new Task('Clean the room');
// let task2 = new Task('Buy a apple')
// let task3 = new Task();

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log(Task.count);

// task2.complete();



console.log(task.done, task._done)
task.complete()
console.log(task.done, task._done)
