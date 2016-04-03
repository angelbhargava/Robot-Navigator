var facing = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
var maxXCoordinate = 4;
var maxYCoordinate = 4;
var commandInitiated = false;
onButtonClick= function (){
	var commandVal=document.getElementById("command");
    processCommand(commandVal.value);	   
 };


function left() 
{ 
   var currentDirection = this.robot.currentDirection;	
   this.robot.currentDirection=	Direction[currentDirection.toUpperCase()].left;

}

function right()
{ 
   var currentDirection = this.robot.currentDirection;
   this.robot.currentDirection=	Direction[currentDirection.toUpperCase()].right;
}

function move() {
    var currentDirection = this.robot.currentDirection;
	var newY = this.robot.currentYCoordinates + Direction[currentDirection.toUpperCase()].stepSizeOnYAxis;
	var newX = this.robot.currentXCoordinates + Direction[currentDirection.toUpperCase()].stepSizeOnXAxis;
	if (validYCoordinate(maxYCoordinate) && validXCoordinate(maxXCoordinate)) {
        this.robot.currentYCoordinates = newY;
		this.robot.currentXCoordinates = newX;
        drawRobot(this.robot);
    }
}

function validXCoordinate(axis) {
    if (isNaN(axis)) {
       writeError("Please enter a numeric X coordinates!");
        return false;
    } else if (axis < 0 || axis > maxXCoordinate) {
       
        return false;
    } else {
        return true;
    }
}

function validDirection(face) {
    if (facing.indexOf(face) === -1) {
        writeError("Wrong facing!");
        return false;
    } else {
        return true;
    }
}
function validYCoordinate(axis) {
    if (isNaN(axis)) {
        writeError("Please enter a numeric Y coordinates!");
        return false;
    } else if (axis < 0 || axis > maxYCoordinate) {
        
        return false; 
        
        
    } else {
        return true;
    }
}

function place(posCmd) {
    var newPos = posCmd.split(",");
    var newX = parseInt(newPos[0].trim());
    var newY = parseInt(newPos[1].trim());
    var newDirection = newPos[2].trim().toUpperCase();
    if (validXCoordinate(newX) && validYCoordinate(newY) && validDirection(newDirection)) {
        robot.currentXCoordinates = newX;
        robot.currentYCoordinates = newY;
        robot.currentDirection = newDirection;
        drawRobot(robot);
    }
}

function report() { 
var reportMessage = document.getElementById("report");
reportMessage.innerHTML = this.robot.currentXCoordinates + "," + this.robot.currentYCoordinates + "," + this.robot.currentDirection;
}

var Direction = {
  NORTH : {left: "WEST", right: "EAST", stepSizeOnXAxis :0, stepSizeOnYAxis : 1}, 
  SOUTH :  {left: "EAST", right: "WEST", stepSizeOnXAxis :0, stepSizeOnYAxis : -1}, 
  EAST :  {left: "NORTH", right: "SOUTH", stepSizeOnXAxis :1, stepSizeOnYAxis : 0},
  WEST :  {left: "SOUTH", right: "NORTH", stepSizeOnXAxis :-1, stepSizeOnYAxis : 0}
};

function processCommand(command) {
    console.log(command);
    writeError(""); 
    var completeCmd = command.split(" "); //e.g. PLACE 0,1, NORTH LEFT MOVE REPORT
	for (i = 0; i < completeCmd.length; i++) 
	{
	        switchLiteralCommand(completeCmd[i], completeCmd);
		    if (completeCmd[i].toUpperCase() === 'PLACE')
		    {
			   i=i+1;
			}
	 
	} 
} 


function switchLiteralCommand(literalCmd, completeCmd) {

if (commandInitiated) {
    switch (literalCmd.toUpperCase()) {
        case "PLACE":
            var posCmd = completeCmd.slice(1).join("");
            place(completeCmd[1]);
            break;
        case "MOVE":
            move();
            break;
        case "LEFT":
            left();
            break;
        case "RIGHT":
            right();
            break;
        case "REPORT":
            report();
            break;
        default:
            writeError("Invalid command!");
            break;
    }
}
else if ((!commandInitiated && literalCmd.toUpperCase() === 'PLACE')){
	commandInitiated = true;
		var posCmd =   completeCmd[1]+","+completeCmd[2];
		console.log(posCmd);
	    place(posCmd);
} else {
 
        writeError("The first valid command to the robot must be a PLACE command!");
    
}

}


function writeError(msg) {
    var errorMessage = document.getElementById("error");
    errorMessage.innerHTML = msg;
}

var robot = {
    currentXCoordinates:0,
    currentYCoordinates:0,
    currentDirection: Direction.NORTH 
};

function drawRobot(newRobot) {    
	var robPos=document.getElementById("circle");
    var axisX = (newRobot.currentXCoordinates + 1) * 100;
    var axisY = (5 - newRobot.currentYCoordinates) * 100;
	robPos.setAttribute('cx',axisX);
	robPos.setAttribute('cy',axisY);

}







