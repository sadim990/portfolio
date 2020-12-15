var canvas = new fabric.Canvas('myCanvas');
hero_x=10;
hero_y=10;

hero_image_height=30;
hero_image_width=30;

var hero_object="";
var hero_image_object="";

function player_update(){
    fabric.Image.fromURL("player.jpg",function(Img){
       hero_object=Img;

       hero_object.scaleToWidth(150);
       hero_object.scaleToHeight(150);
       hero_object.set({
       top:hero_y,
       left:hero_x
       });
       canvas.add(hero_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
       hero_image_object=Img;
       hero_image_object.scaleToWidth(hero_image_width);
       hero_image_object.scaleToHeight(hero_image_height);
      hero_image_object.set({
       top:player_y,
       left:player_x
       });
       canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80')
    {
        console.log("P and Shift pressed together");
        hero_image_width = hero_image_width + 10;
        hero_image_height = hero_image_height + 10;
        document.getElementById("current_width").innerHTML = hero_image_width;
        document.getElementById("current_height").innerHTML = hero_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77')
    {
        console.log("M and Shift pressed together");
        hero_image_width = hero_image_width - 10;
        hero_image_height = hero_image_height - 10;
        document.getElementById("current_width").innerHTML = hero_image_width;
        document.getElementById("current_height").innerHTML = hero_image_height;
    }
    if (keyPressed == '70'){
        new_image("ironman_face.png");
        console.log("f");
    }
    if (keyPressed == '66'){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if (keyPressed == '76'){
        newimage("hulk_legs.png");
        console.log(l);
    }
    if (keyPressed == '82'){
        newimage("thor_rifht_hand.png");
        console.log("r");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand');
        console.log("h");
    }
    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    if (keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    }

}