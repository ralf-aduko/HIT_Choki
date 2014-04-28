#pragma strict

var openFlag : int;
var selectedFlag : int;
var Counter : int = 0;

//var DoorOpenAngle : float;
//var DoorCloseAngle : float;

function Start(){
	openFlag = 1;
	selectedFlag = 0;
}

function Update(){

	if(SelectedWithMouseScript.selectedGameObject != null){
		if("DoorPlate" == SelectedWithMouseScript.selectedGameObject.name){
			selectedFlag = 1;
		}
	}
	
	if(selectedFlag == 1){
		if(openFlag == 1){
			if(Counter < 90){
				transform.RotateAround(this.transform.position,Vector3.up,Time.deltaTime*60);
				Counter++;				
			}else{
				Debug.Log("Door opened!");
				Counter = 0;
				openFlag = 0;
				selectedFlag = 0;
			}
		}else{
			if(Counter < 90){
				transform.RotateAround(this.transform.position,Vector3.down,Time.deltaTime*60);
				Counter++;				
			}else{
				Debug.Log("Door closed!");
				Counter = 0;
				openFlag = 1;
				selectedFlag = 0;
			}
		}
	}
	
	
}
