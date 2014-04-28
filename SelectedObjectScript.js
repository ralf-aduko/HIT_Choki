#pragma strict

function Update () {

	if(SelectedWithMouseScript.selectedGameObject != null){
		if(this.gameObject == SelectedWithMouseScript.selectedGameObject){
		Debug.Log("I'm " + this.gameObject.name + "!");
		}
	}

}
