// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};
const modelViewer = document.querySelector("model-viewer")
modelViewer.addEventListener("progress", onProgress);
const apuButton = modelViewer.querySelector('button[slot="hotspot-3"]');
const apuLabel =  document.querySelector('.APULabel');

const connectButton = modelViewer.querySelector('button[slot="hotspot-4"]');
const connectLabel =  document.querySelector('.ConnectLabel');

const fuelButton = modelViewer.querySelector('button[slot="hotspot-5"]');
const fuelLabel =  document.querySelector('.FUELLabel');

apuButton.addEventListener('click', () => {
  let visibility = apuLabel.style.visibility;
  visibility = visibility === 'visible' ? 'hidden' : 'visible';
  apuLabel.style.visibility = visibility;
  console.log(apuButton.childNodes[1])
});

connectButton.addEventListener('click', () => {
  let visibility = connectLabel.style.visibility;
  visibility = visibility === 'visible' ? 'hidden' : 'visible';
  connectLabel.style.visibility = visibility;
  console.log(connectButton.childNodes[1])
});

fuelButton.addEventListener('click', () => {
  let visibility = fuelLabel.style.visibility;
  visibility = visibility === 'visible' ? 'hidden' : 'visible';
  fuelLabel.style.visibility = visibility;
  console.log(fuelButton.childNodes[1])
});