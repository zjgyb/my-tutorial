import smallImg from "./small.jpg";
// import bigImg from "./big.png";

(function() {
  const smallImage = document.createElement("img");
  smallImage.src = smallImg;
  document.body.appendChild(smallImage);

  const bigImage = document.createElement("img");
  // bigImage.src = require.ensure('./big.png');
  import("./big.png").then(modules => {
    bigImage.src = modules.default;
  });
  document.body.appendChild(bigImage);
})();
