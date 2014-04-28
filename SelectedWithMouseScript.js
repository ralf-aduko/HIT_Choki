#pragma strict

static var selectedGameObject : GameObject;

function Start(){
	selectedGameObject = null;
}

function Update () {
	var ray : Ray;
	var hit : RaycastHit;

	ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	
	if(Physics.Raycast(ray, hit, 100)){
		if(Input.GetMouseButtonDown(0)){
			selectedGameObject = hit.collider.gameObject;
		}else{
			selectedGameObject = null;
		}
  	}else{
  		selectedGameObject = null;
  	}
}
