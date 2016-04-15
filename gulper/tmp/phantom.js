var phantom = require('phantom');

var sitepage = null;
var phInstance = null;
phantom.create()
    .then((instance) => {
        phInstance = instance;
        return instance.createPage();
    })
    .then((page) => {
        sitepage = page;
        return page.open('https://ya.ru/');
    })
    .then((status) => {
        console.log(status);
        console.log('SIBI');
        console.log(sitepage.property);
        return sitepage.property('content');
    })
    .then((content) => {
        console.log(content);
        sitepage.close();
        phInstance.exit();
    })
    .catch((error) => {
        console.log(error);
        phInstance.exit();
    });
