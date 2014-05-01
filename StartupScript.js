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
		// add error check
		if(Network.InitializeServer(8, int.Parse(Portnum),false) == NetworkConnectionError.NoError){
			Application.LoadLevel("ServerManagement");
		}
	}
	
	if(GUI.Button(Rect (30, 130, 100, 20), "Client")){
		// add error check
		if(Network.Connect(IPaddress, int.Parse(Portnum)) == NetworkConnectionError.NoError){
			Application.LoadLevel("main");
		}
	}
}
