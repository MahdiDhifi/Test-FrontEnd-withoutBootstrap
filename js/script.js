 window.onload = displayProducts;
var nbprods;
//display products from json file.
function displayProducts(){
var xhr = new XMLHttpRequest(); 
     xhr.onreadystatechange = function() { 
     	
             if(xhr.readyState === 4) {
               var products = JSON.parse(xhr.responseText);//it takes the string from the response and it converts it in a javascript object
                  var prods='<ul>';
                    nbprods=products.length;
                 for (var item=0; item<nbprods; item ++) {
                      prods += '<li id="prod'+item+'" onClick="changeIcon(this.id)">'+
                                  ' <a href="#'+products[item].title+'"><span class="accord-link">'+products[item].title+'</span>'+
                                  '<span id="icon'+item+'" class="accord-icon"><img id="img-prod'+item+'" src="img/plus.png"></span>'+
                                  '</a>'+
                                  '<div id="'+products[item].title+'" class="accord-content acc-prod'+item+'">'+
                                  '<p>'+ products[item].description+'</p>'+
                                  '<img src="'+products[item].image+'">'+ 
                                  ' </div>'+
                                '</li>'
                   
                 }     
                       
                      document.getElementById('accord').innerHTML = prods+'</ul>';
     } else {
         console.log(xhr.readyState);
     }
 };
 xhr.open('GET', 'js/products.json');
 xhr.send();

}


//this function change icon (+/-) on Accordion 
function changeIcon(id)
{

   for(var i=0;i<nbprods;i++){
   		var p='prod'+i;
   		var imgId='img-'+p;
   		var src=document.getElementById(imgId).src;
   		var img=src.substr(-8,src.length);
   		if(p===id){
  			if(img==="plus.png"){
    			document.getElementById(imgId).src=src.substr(0,(src.length-8))+"mins.png";
    			var accState=document.getElementsByClassName("accord-content")[i].style.display="block"; 
   			}
  			 else{
   				document.getElementById(imgId).src=src.substr(0,src.length-8)+"plus.png";
   				var accState=document.getElementsByClassName("accord-content")[i].style.display="none"; 
 			}
   		}
		else{
			document.getElementById(imgId).src=src.substr(0,src.length-8)+"plus.png";
			var accState=document.getElementsByClassName("accord-content")[i].style.display="none"; 
		}
	}
		
}
