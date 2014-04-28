#pragma strict


var FirstViewCamera : GameObject;

function Start () {
//	Debug.Log("Hello World! -> " + x);
}

function Update () {
//	move test
//	transform.position.z += 0.05;
//	transform.position += Vector3(0,0,0.05);
//	transform.Translate(0,0,0.05);

//	input test
	
	var x : float = 0;
	var y : float = 0;
	
	var runningDirection : Vector3;
	
	x = Input.GetAxis("Horizontal_2");
	y = Input.GetAxis("Vertical_2");
	
//	transform.Translate(x*0.1,0,y*0.1);
		
	runningDirection = FirstViewCamera.transform.position - this.transform.position;
	
	runningDirection.y = 0;
	
	runningDirection = runningDirection.normalized;
	
	transform.Translate((runningDirection*y*0.1 - Vector3.Cross(runningDirection,Vector3.up).normalized*x*0.1), Space.Self);
}
