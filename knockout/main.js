var UserFormModel = function() {
  this.firstName = ko.observable('');
  this.lastName = ko.observable('');
  this.age = ko.observable('');
}

ko.applyBindings(new UserFormModel());
