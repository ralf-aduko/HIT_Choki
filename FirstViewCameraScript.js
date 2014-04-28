#pragma strict

function Update () {

	var camera_x : float = 0;
	var camera_y : float = 0;
/*
	camera_x = Input.GetAxis("Mouse X");
	camera_y = Input.GetAxis("Mouse Y");
*/	
	camera_x = Input.GetAxis("Horizontal");
	camera_y = Input.GetAxis("Vertical");
	
	transform.Rotate(-camera_y*2,camera_x*2,0,Space.Self);

	/*	
	if(Input.GetButtonUp("Jump")){
		transform.Rotate(0,0,0,Space.Self);
	}
	*/
}
