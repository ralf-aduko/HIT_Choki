#pragma strict

/*
function Start () {

}

function Update () {

}
*/

@RPC
function PrintText (text : String){
	GUI.Label(Rect (10, 200, 200, 20),text);
}
