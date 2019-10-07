import _ from 'lodash';

(function() {
  const box = document.createElement("div");
  box.innerHTML = _.add(6, 4);
  document.body.appendChild(box);
})();
