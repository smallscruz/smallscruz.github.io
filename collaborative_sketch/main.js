var config = {
    apiKey: "AIzaSyCz89n6BTZQFLyjQIxyxd8Zz94toD48ryI",
    authDomain: "collabrative-sketch.firebaseapp.com",
    databaseURL: "https://collabrative-sketch.firebaseio.com",
    storageBucket: "collabrative-sketch.appspot.com",
    messagingSenderId: "1025968660513"
  };
  var eraserWidth = 5;
  var eraserHeight = 5;
  
  firebase.initializeApp(config);
  
  var pointsData = firebase.database().ref();
  
  var points = [];
  var currentTool = "pencil";
  
  function setup() {
      var canvas = createCanvas(1430, 785);
      background(255);
      fill(80, 70, 100);
      
      pointsData.on("child_added", function (point) {
          points.push(point.val());
      })
      pointsData.on("child_removed", function() {
          points = [];
      });
      
      canvas.mousePressed(drawPoint);
      canvas.mouseMoved(drawPointIfMousePressed);
  }
  
  function draw() {
      background(0);
      
      for (var i = 0; i < points.length; i++) {
          var point = points[i];
          fill("Aqua");
          ellipse(point.x, point.y, 5, 5)
      }
  }
  
  function drawPoint() {
      pointsData.push({x: mouseX, y: mouseY});
      }
  
  function drawPointIfMousePressed() {
      if (mouseIsPressed) {
          drawPoint();
      }
  }
  $("#saveDrawing").on("click", saveDrawing);
  
  function saveDrawing() {
      saveCanvas();
  }
  
  $("#clearDrawing").on("click", clearDrawing);
  
  function clearDrawing() {
      pointsData.remove();
      points = [];
  }