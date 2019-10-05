(function() {
  const button = document.createElement("button");
  button.innerText = '新增';
  button.onclick = () => {
    const box = document.createElement("div");
    import("./a").then(module => {
      box.innerHTML = module.default;
    });
    document.body.appendChild(box);
  };
  document.body.appendChild(button);
})();
