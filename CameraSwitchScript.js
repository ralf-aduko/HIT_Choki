#pragma strict

var MainCamera : GameObject;
var SubCamera : GameObject;
    
function Start (){

//    MainCamera = GameObject.Find("FirstViewCamera");
//    SubCamera = GameObject.Find("ThirdViewCamera");

	MainCamera.camera.enabled = true;
    SubCamera.camera.enabled = false;
}

function Update () {
    if (Input.GetKeyUp("f")){
        if(MainCamera.camera.enabled){
            MainCamera.camera.enabled = false;
            SubCamera.camera.enabled = true;
        }else{
            MainCamera.camera.enabled = true;
            SubCamera.camera.enabled = false;
        }
        
    } 	
}
