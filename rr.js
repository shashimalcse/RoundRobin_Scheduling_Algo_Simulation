
function setup() {
	createCanvas(4000, 4000);
	var p=['p1','p2','p3','p4','p5'];
at=[0,1,2,3,4];
bt=[10,16,14,13,7];
var n=3;
pro=[];
var final=roundrobin(p,at,bt,n);
console.log(final[0]);
p1=new Process(255,0,0,1*30);
for(var i=0;i<final[0].length;i++){
	if(final[0][i]=='p1'){
		var p1=new Process(255,0,0,i*30);
		pro.push(p1);
	}
	else if(final[0][i]=='p2'){
		var p2=(new Process(0,255,0,i*30));
		pro.push(p2);
	}
	else if(final[0][i]=='p3'){
		var p3=(new Process(0,0,255,i*30));
		pro.push(p3);
	}
	else if(final[0][i]=='p4'){
		var p4=(new Process(255,255,0,i*30));
		pro.push(p4);
	}
	else if(final[0][i]=='p5'){
		var p5=(new Process(255,0,255,i*30));
		pro.push(p5);
	}
}
 
	
	}
	
function draw() {
background(0);
for(var i=0;i<pro.length;i++){
	pro[i].move();
	pro[i].show();
}
// bt_p1=document.getElementById('bt_p1').value;
// bt_p2=document.getElementById('bt_p2').value;
// bt_p3=document.getElementById('bt_p3').value;
// bt_p4=document.getElementById('bt_p4').value;
// bt_p5=document.getElementById('bt_p5').value;
// at_p1=document.getElementById('at_p1').value;
// at_p2=document.getElementById('at_p2').value;
// at_p3=document.getElementById('at_p3').value;
// at_p4=document.getElementById('at_p4').value;
// at_p5=document.getElementById('at_p5').value;
// bt=[];
// at=[];
// bt.push(bt_p1);
// bt.push(bt_p2);
// bt.push(bt_p3);
// bt.push(bt_p4);
// bt.push(bt_p5);
// at.push(at_p1);
// at.push(at_p2);
// at.push(at_p3);
// at.push(at_p4);
// at.push(at_p5);
// var p=['p1','p2','p3','p4','p5'];
// at=[0,1,2,3,4];
// bt=[10,6,4,3,7];
// var n=3;
// var final=roundrobin(p,at,bt,n);
// console.log(final[0]);


	
	}	
	function roundrobin(p,a,b,n){
		var seq=[]
		var res_b=[];
		var res_a=[];
		for (var x = 0; x <b.length; x++) {
						res_b[x] = b[x]; 
						res_a[x] = a[x]; 
				}    
		var t=0;
		var w=[];
		var comp=[];
		while(true){
				var flag=true;
				for(var i=0;i<p.length;i++){
						if (res_a[i]<=t){
								if(res_a[i]<=n){
										if(res_b[i]>0){
												flag=false;
												if (res_b[i] > n) { 
 
														t = t + n; 
														res_b[i] = res_b[i] - n; 
														res_a[i] = res_a[i] + n; 
														var m=0;
														for(m;m<n;m++){
																seq.push(p[i])
														} 
												} 
												else { 
														t = t + res_b[i];  
														comp[i] = t - a[i];  
														w[i] = t - b[i] - a[i];
														var m=0; 
														for(m;m<res_b[i];m++){
																seq.push(p[i])
														}
														res_b[i] = 0;
												}
										}
								}
								else if (res_a[i] > n) { 
										for (var j = 0; j < p.length; j++) { 

												if (res_a[j] < res_a[i]) { 
														if (res_b[j] > 0) { 
																flag = false; 
																if (res_b[j] > n) { 
																		t = t + n; 
																		res_b[j] = res_b[j] - n; 
																		res_a[j] = res_a[j] + n; 
																		var m=0;
																		for(m;m<n;m++){
																		seq.push(p[j])
														} 
																} 
																else { 
																		t = t + res_b[j]; 
																		comp[j] = t - a[j]; 
																		w[j] = t - b[j] - a[j]; 
																		var m=0;
																		for(m;m<res_b[j];m++){
																		seq.push(p[j])
																		}
																		res_b[j] = 0; 
																} 
														} 
												} 
										} 
 
										if (res_b[i] > 0) { 
												flag = false;  
												if (res_b[i] > n) { 
														t = t + n; 
														res_b[i] = res_b[i] - n; 
														res_a[i] = res_a[i] + n; 
														var m=0;
														for(m;m<n;m++){
																seq.push(p[i])
														}
												} 
												else { 
														t = t + res_b[i]; 
														comp[i] = t - a[i]; 
														w[i] = t - b[i] - a[i]; 
														var m=0;
														for(m;m<res_b[i];m++){
																seq.push(p[i])
														}
														res_b[i] = 0; 
												} 
										} 
								} 
						}
						else if (res_a[i] > t) { 
								t++; 
								i--; 


				}
		}
		if (flag) { 
				break; 
		} 

		}
		return[seq,w,comp];
}
           
class Process{
constructor(r,g,b,stop){
	this.stop=stop;
	this.color=[r,g,b];
			this.start=800+stop*(stop**(0.2));

}
move(){
	
			if(this.start<this.stop){
				this.start=constrain(this.stop,this.stop,50);
				}
			else{
				this.start-=2;
			}

}
show(){
	fill(this.color[0],this.color[1],this.color[2]);
	rect(this.start,50,30,30);

}

}	
