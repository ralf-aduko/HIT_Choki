#pragma strict

var SendText : String;
/*
function Start () {

}

function Update () {

}
*/

function OnGUI() {
	GUI.Label(Rect (10, 10, 200, 20), "I'm Server.");
	
	SendText = GUI.TextField (Rect (10, 30, 200, 20), SendText, 25);

	// Change GUI layout
	if(GUI.Button(Rect (10, 80, 100, 20), "Send to All")){
		networkView.RPC("PrintText",RPCMode.All,SendText);
	}

	// Change GUI layout
	if(GUI.Button(Rect(10, 120, 100, 20), "Disconnect")) {
		Network.Disconnect(5);
		MasterServer.UnregisterHost();
	}

}
