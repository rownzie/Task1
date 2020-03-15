function submit(){
				var a = document.getElementById('x').value;
				var b = document.getElementById('y').value;
				
				//check string characters
				if((a!=null&&a.length<5)||(b!=null&&b.length<5)){
					alert("Invalid, input should be at least 5 characters");
					document.getElementById("x").disabled = true;
					document.getElementById("y").disabled = true;
					document.getElementById("submit").disabled = false;
					document.getElementById("b1").style.display = "none";
					document.getElementById("b2").style.display = "none";
					document.getElementById("b3").style.display = "none";
					document.getElementById("b4").style.display = "none";
					//enable button
					document.getElementById("b5").style.display = "block";
				  }
				  else alert("Continue");
				  // Disable coin toss options
				  document.getElementById("x").disabled = true;
				  document.getElementById("y").disabled = true;
				  document.getElementById("submit").disabled = true;
				  document.getElementById("b1").disabled = false;
				  document.getElementById("b2").disabled = false;
				  document.getElementById("b3").disabled = false;
				  document.getElementById("b4").disabled = false;
			}
function check(){
				var a = document.getElementById('x').value;
				var b = document.getElementById('y').value;
				
				//Checking String if the same
				if(a==b){
				document.getElementById("check").innerHTML="Two strings are the same."
				}
				else{
				document.getElementById("check").innerHTML="Two strings are not the same."
				}
				document.getElementById("b1").disabled = true;
			}
			
function replace(){
				var a = document.getElementById("x").value;
				var b = document.getElementById("y").value;

				//Replace the two input strings
				if(a==b){
				document.getElementById("rep").innerHTML =""+a+" "+b;
				}else{
					var z = a.replace(b);
					var z1 = b.replace(a);
					document.getElementById("rep").innerHTML =""+z1+" "+z;
				}
				document.getElementById("b2").disabled = true;
			}
			
function doMath(){
				var str = document.getElementById('x').value;
				str = str.replace(/ /g,'').replace(/\W/g,'');
				var sum = str.split('').join('');
				
				for(var i=0; i<sum.length; i++){
					if(sum[i]==sum[0]){
							var a = sum[i];
						}
					}
					
				var str1 = document.getElementById('y').value;	
				str1 = str1.replace(/ /g,'').replace(/\W/g,'');
				var sum1 = str1.split('').join('');				
					
				for(var j=0; j<sum1.length; j++){
					if(sum1[j]==sum1[2]){
							var b = sum1[j];
						}
					}
				// Add them together and display
				var sum2 = a.concat(b);
				document.getElementById("res").innerHTML=sum2;
				document.getElementById("b3").disabled = true;
			}
			
function countSpace(){
				var x = document.getElementById('x').value;
				var y = document.getElementById('y').value;
				var str = x+y;
				str = str.replace(/ /g,'').replace(/\W/g,'');
				var z = str.split('').join('');
				var spaceCount = (x.split(" ").length - 1);
				var spaceCount1 = (y.split(" ").length - 1);
				var add = spaceCount+spaceCount1;
				document.getElementById("spc").innerHTML = "Spaces: "+add+"  ";
				document.getElementById("spc1").innerHTML = "Output without spaces:  "+z;
				
				document.getElementById("b4").disabled = true;
				//enable button
				document.getElementById("b5").style.display = "block";
				
			}
function reset(){
				document.getElementById("myForm").reset();
				document.getElementById("check").innerHTML="";
				document.getElementById("rep").innerHTML="";
				document.getElementById("res").innerHTML="";
				document.getElementById("spc").innerHTML="";
				document.getElementById("spc1").innerHTML="";
				//enable pane
				document.getElementById("x").disabled = false;
				document.getElementById("y").disabled = false;
				document.getElementById("submit").disabled = false;
				document.getElementById("b1").style.display = "";
				document.getElementById("b2").style.display = "";
				document.getElementById("b3").style.display = "";
				document.getElementById("b4").style.display = "";
				//Disable
				document.getElementById("b1").disabled = true;
				document.getElementById("b2").disabled = true;
				document.getElementById("b3").disabled = true;
				document.getElementById("b4").disabled = true;
				
				  // Hide reset button
				  document.getElementById("b5").style.display = "none";
}