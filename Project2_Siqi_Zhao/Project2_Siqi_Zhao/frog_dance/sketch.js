let serial;
let latestData = "waiting for data";
let Value = 0;
let serialPorts = ['','','COM5'];
let serials = [];
let data = [];
let textXpos;
let vid;
let key;

function setup() {

	createCanvas(windowWidth, windowHeight);
	background("#28ABB9");
    
  serial = new p5.SerialPort();
    
  serial.list();
    
  serial.open("COM5");
    
  serial.on('list', gotList); 
    
  serial.on('connected', serverConnected);
    
  serial.on('data', gotData);

}

function serverConnected() 
{
    print("Connected to Server");
}


function gotList(thelist) 
{
    print("List of Serial Ports:");

    for (let i = 0; i < thelist.length; i++) {

        print(i + " " + thelist[i]);
    }
}
function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
    let currentString = serial.readLine(); 
    trim(currentString); 
    if (!currentString) return; 
    console.log(currentString); 
    latestData = currentString;
	if (!isNaN(currentString)) 
	{  
    Value  = currentString;  
  }
}


function gotRawData(thedata) {
    print("gotRawData" + thedata);
}


function draw() {

  background("#28ABB9");
  translate(windowWidth/2, windowHeight/2);
  Value=parseInt(latestData);
  print('The value of latestData is ' + Value);
  fill(255,0,0);
  rectMode(CORNER);
  text("KEY value: " + Value, 100, 100,150,100); 
  if(Value == 1)
  {
	key = 1;	  
  }
  else
  {
	key = 0;	  	  
  }
  if(key == 1)
  {
    //translate(windowWidth/2, windowHeight/2);
	for(var i=-100;i<100;i+=40)
	{
	noStroke()
	fill("#B3E283");
	ellipse(i+i,50*sin(frameCount/15+i)+10+10,100,100);	
	fill("#FF4646");
    ellipse(i+i,50*sin(frameCount/15+i),10+30*sin(frameCount/15),10+30*sin(frameCount/10+i));
	fill("#B3E283");
	ellipse(i+i-20,50*sin(frameCount/15+i)-40,20,20);
	ellipse(i+i+20,50*sin(frameCount/15+i)-40,20,20);	
    fill(0);
	ellipse(i+i-20,50*sin(frameCount/15+i)-40,10,10);
	ellipse(i+i+20,50*sin(frameCount/15+i)-40,10,10 );
	}	  
  }
  else
  {
	frameCount = 50;  
	for(var i=-100;i<100;i+=40)
	{
	noStroke()
	fill("#B3E283");
	ellipse(i+i,50*sin(frameCount/15+i)+10+10,100,100);	
	fill("#FF4646");
    ellipse(i+i,50*sin(frameCount/15+i),10+30*sin(frameCount/15),10+30*sin(frameCount/10+i));
	fill("#B3E283");
	ellipse(i+i-20,50*sin(frameCount/15+i)-40,20,20);
	ellipse(i+i+20,50*sin(frameCount/15+i)-40,20,20);	
    fill(0);
	ellipse(i+i-20,50*sin(frameCount/15+i)-40,10,10);
	ellipse(i+i+20,50*sin(frameCount/15+i)-40,10,10 );
	}	  
  }
  latestData = "Serial Port is Closed";
}
