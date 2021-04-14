//This is the base numbers
let square = {
    length: 5, width: 5, height: 5
}
unitConverter("imperial", square)
unitConverter("metric", square)

function unitConverter (unit, square) {
    if(unit === "imperial"){
    let HM = square.height*2.54;
    let WM = square.width*2.54;
    let LM = square.length*2.54;

    document.writeln("Heigth in inches is: "+ square.height+ ". It is "+HM+ " in centimeters.\n ");
    document.writeln("Width in inches is: "+ square.width+ ". It is "+WM+ " in centimeters. \n ");
    document.writeln("Length in inches is: "+ square.length+ ". It is "+LM+ " in centimeters. \n ");
    }
    
    if(unit === "metric"){
    let HM = square.height/ 2.54;
    let WM = square.width/ 2.54;
    let LM = square.length/ 2.54;

    document.writeln("Heigth in centimeters is: "+ square.height+ ". It is "+HM+ " in inches.\n ");
    document.writeln("Width in centimeters is: "+ square.width+ ". It is "+WM+ " in inches. \n ");
    document.writeln("Length in centimeters is: "+ square.length+ ". It is "+LM+ " in inches. \n ");
    }
    
}

