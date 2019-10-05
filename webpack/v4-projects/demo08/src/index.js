(function() {
  const box = document.createElement('div');
  box.innerHTML = 'Hello world!!!';
  document.body.appendChild(box);

  if (__DEV__) {
    document.write(new Date());
  } else {
    document.write('abc');;
  }
})();