import bundle from './a.bundle';

(function() {
  const button = document.createElement("button");
  button.innerText = '新增';
  button.onclick = () => {
    const box = document.createElement("div");
    bundle(text => {
      box.innerHTML = text;
    });
    document.body.appendChild(box);
  };
  document.body.appendChild(button);
})();
