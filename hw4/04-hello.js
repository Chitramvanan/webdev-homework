HTMLElement.prototype.centre = function () {
  var width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight;
  this.style.position = "absolute";
  this.style.left = (width - this.offsetWidth) / 2 + "px";
  this.style.top = (height - this.offsetHeight) / 3 + window.pageYOffset + "px";
};

var img = new Image(),
  body = document.getElementsByTagName("body")[0];
img.src = "http://placekitten.com/200/200";
img.style.borderRadius = "100%";
img.onload = function () {
  this.centre();
};

document.body.appendChild(img);
let newdiv = document.createElement("div");
newdiv.textContent =
  "Hi! This is Chitradevi. I am working towards my masters degree in Computer Science. I have 3year old boy who keeps me busy all day. I enjoy going for long walks and listening music.";
newdiv.style.color = "black";
newdiv.style.fontSize = "25px";
newdiv.style.padding = "550px";
document.body.append(newdiv);
