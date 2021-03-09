var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  }

  var json = JSON.stringify(object);
  console.log(json);

 var js = JSON.parse(json)

 console.log(js)