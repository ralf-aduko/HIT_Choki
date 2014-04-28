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

	if(GUI.Button(Rect (30, 100, 100, 20), "Send to All")){
		networkView.RPC("PrintText",RPCMode.All,SendText);
	}


	if(GUILayout.Button ("Disconnect")) {
		Network.Disconnect(5);
		MasterServer.UnregisterHost();
	}
}
