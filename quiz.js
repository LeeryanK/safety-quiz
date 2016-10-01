loader.render('pquiz.json', document.getElementById('personality'), function(response) {
  console.log('Here is our response...');
  console.log(response);
});
console.log('Rendering...');
