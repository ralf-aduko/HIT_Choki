#pragma strict

var stringToEdit : String = "Hello World";
var inputString : String = "Input-text is displayed.";
/*
function Start () {

}

function Update () {

}
*/

function OnGUI () {
/*
	if (GUI.Button (Rect (10,10,150,100), "I am a button")) {
		print ("You clicked the button!");
	}
*/
	stringToEdit = GUI.TextField (Rect (400, 10, 200, 20), stringToEdit, 25);
	
	GUI.Label(Rect (400, 40, 200, 20), inputString);
	
	if(Input.GetKeyDown("return")){
		inputString = stringToEdit;
//		stringToEdit = "";
	}
}
