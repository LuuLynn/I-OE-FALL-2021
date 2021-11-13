#define LED1 6   
#define Button1_Pin 4  
int val1 = 0;        
int old_val1 = 0;   
int button1_state = 0;      

int ledState = LOW;
void setup() {
  // put your setup code here, to run once:

  pinMode(LED1, OUTPUT);     
  digitalWrite(LED1, LOW); 
 
  pinMode (Button1_Pin, INPUT);  
  
  Serial.begin(9600); 
}

void loop() {
  // put your main code here, to run repeatedly:
  
  val1 = digitalRead(Button1_Pin); 

  if ((val1 == HIGH) && (old_val1 == LOW))
  {
    button1_state = 1 - button1_state;
    delay(40);     
  }
  old_val1 = val1;      
  if(button1_state == 1)
  {
    digitalWrite(LED1, HIGH);
    Serial.println(String(button1_state));
  }
  else
  {
    digitalWrite(LED1, LOW); 
    Serial.println(String(button1_state)); 
  }
}
