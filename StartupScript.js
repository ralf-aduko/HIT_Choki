#pragma strict

var IPaddress : String = "Input your IP address.";
var Portnum : String = "Input port number.";

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Label(Rect (10, 10, 200, 20), "IP address :");
	IPaddress = GUI.TextField (Rect (10, 30, 200, 20), IPaddress, 25);
	
	GUI.Label(Rect (10, 50, 200, 20), "port number :");
	Portnum = GUI.TextField (Rect (10, 70, 200, 20), Portnum, 25);
	
	if(GUI.Button(Rect (30, 100, 100, 20), "Host")){
		Network.InitializeServer(8, int.Parse(Portnum),false);
		Application.LoadLevel("ServerManagement");
	}
	
	if(GUI.Button(Rect (30, 130, 100, 20), "Client")){
		Network.Connect(IPaddress, int.Parse(Portnum));
		Application.LoadLevel("main");
	}
}
