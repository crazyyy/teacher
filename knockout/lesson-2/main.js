function AppViewModel() {
  var newsArr = [
    {
      title: 'Hotest news!',
      text: 'Warning! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      isNew: true
    },
    {
      title: 'Simple news',
      text: 'Provident cupiditate ducimus, distinctio blanditiis.',
      isNew: false
    },

    {
      title: 'Not interested anyone',
      text: ' Vero veritatis quidem optio nostrum ex ipsam iure nobis, repudiandae, quasi at ad qui tempora excepturi rem.',
      isNew: false
    }
  ];

  this.news = ko.observableArray(newsArr);
}

ko.applyBindings(new AppViewModel());


