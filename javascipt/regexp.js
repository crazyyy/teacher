var reg = /^([a-z0-9_\.]+)@([a-z0-9_\.]+)\.([a-z\.]{2,6})$/


 while ( (arr = reg.exec(input)) != null ) { console.log(arr[0]); };
