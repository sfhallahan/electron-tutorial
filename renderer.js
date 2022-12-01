const infoEl = document.getElementById('info');
infoEl.innerText = `This app is using chrome version: v${versions.chrome()}`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();
