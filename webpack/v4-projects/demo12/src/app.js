import _ from "lodash";

(function() {
  const box = document.createElement("div");
  box.innerHTML = _.max([12, 4, 100, 3, 1010]);
  document.body.appendChild(box);
})();

