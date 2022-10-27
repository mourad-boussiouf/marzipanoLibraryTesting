
alert("1");
var panoElement = document.getElementById('pano');
var viewerOpts = {
  controls: {
    mouseViewMode: 'drag'    // drag|qtvr
  }
};

var viewer = new Marzipano.Viewer(panoElement, viewerOpts)

var levels = [
  { tileSize: 512, size: 512 },
  { tileSize: 512, size: 1024 }
];

var geometry = new Marzipano.CubeGeometry(levels);
var source = Marzipano.ImageUrlSource.fromString("tiles/{z}/{f}/{y}/{x}.jpg");
var view = new Marzipano.RectilinearView();

var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view
});


var levels = [
  { tileSize: 256, size: 256, fallbackOnly: true },
  { tileSize: 512, size: 512 },
  { tileSize: 512, size: 1024 }
];

var geometry = new Marzipano.CubeGeometry(levels);

var source = Marzipano.ImageUrlSource.fromString("tiles/{z}/{f}/{y}/{x}.jpg", {
  cubeMapPreviewUrl: "tiles/preview.jpg"
});

var initialView = {
  yaw: 90 * Math.PI/180,
  pitch: -30 * Math.PI/180,
  fov: 90 * Math.PI/180
};

var limiter = Marzipano.RectilinearView.limit.traditional(1024, 120*Math.PI/180);

var view = new Marzipano.RectilinearView(initialView, limiter);

var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

alert("2");

