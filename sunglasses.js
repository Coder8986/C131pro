status = "";
objects = [];

function preload() {
    img = loadImage("red 22 sunglasses.jpeg");
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center()
} 

function modelLoaded() {
    console.log("modelLoaded");
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.log("error");
    }
    console.log(results);
    objects = results;
    
}

function draw() {
    image(img, 0,0,380,380);
    if (status != "") {
        objectDetector.detect(img, gotResults);
       for (i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status: Object Detected";
           document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :" + objects.length;
           fill("#FF0000");
           precent = floor( objects[i].confidence * 100);
           text(objects[i].label + " " + precent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height)
       }
   }
}

