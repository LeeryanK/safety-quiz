loader.render('test-quiz.json', document.getElementById('personality'), function(response) {
  console.log('Here is our response...');
  console.log(response);
});
console.log('Rendering...');
