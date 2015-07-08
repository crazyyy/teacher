var UserFormModel = function() {
  this.firstName = ko.observable('');
  this.lastName = ko.observable('');
  this.age = ko.observable('');
  this.sex = ko.observable('');
  this.adminName = ko.observable('');
  this.isAdmin = ko.observable(false);
  this.sexOptions = ['Man', 'Woman'];
  this.fullName = ko.computed(function (){
    return this.firstName() + ' ' + this.lastName();
  },this);
  this.notEmpty = ko.computed(function () {
    return !!this.age() || !!this.sex() || !!this.lastName() || !!this.firstName() || !!this.isAdmin();
  },this);
  this.reset = function () {
    this.firstName('');
    this.lastName('');
    this.age(null);
    this.sex(null);
    this.isAdmin(false);
  };
  this.save = function () {
    event.preventDefault();
    if (this.notEmpty()) {
      alert('God save the Queen!')
    }

  }


}

ko.applyBindings(new UserFormModel());
