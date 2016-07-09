

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hallo Jessica, alte Schreppe';

var my_boolean = true;
var my_first_array = [1,'Jessica',2,'Michael'];

document.write('\nWert='   + my_first_array);

document.write('\n\n');
//alert("Hallo");

document.write('\nArray = '   + my_boolean);

console.log("Hello World the first");

// Bild switsch
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/palme.jpg') {
      //alert("TRUE");
      myImage.setAttribute ('src','images/moped.jpg');
    } else {
      //alert("FALSE");
      myImage.setAttribute ('src','images/palme.jpg');
    }
}




document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
}
