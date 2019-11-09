var kelimeler= ["BİLİŞİM","ÇİÇEK","BİLGİSAYAR","YENGEÇ","KABA","KALABALIK"];
var kelime;
var hak=0;

var yenikelime = document.getElementById("#yenikelime");
var harf= document.querySelectorAll("#harf");

var diziResim = document.getElementById("#diziResim");
var counter = 1 ;
var adam = ["adam.png","adam1.png","adam2.png","adam3.png","adam4.png","adam5.png","adam6.png","adam7.png"];


(function(){
	harf.forEach(function(tikla) {
		tikla.onclick=function(event){

			
			this.setAttribute("disabled","disabled");
			var kontrol = harfKontrol(kelime,this.textContent);
 			
			harfEkle(this.textContent);
			if(kontrol)
			{
				harfKoy(kelime,this.textContent);
			}
			else
			{
				document.getElementById("diziResim").src=adam[counter];
				adam.textContent = adam[counter];
				counter++;
				
			}
 
			var tireDurum=tireKontrol();
			if(!tireDurum)
			{
				swal("KAZANDINIZ :)","Tebrikler!","success");
				harfPasif();
				document.getElementById("diziResim").src=adam[0];
 
			}
			if(adam.length<=counter)
			{
				swal("KAYBETTİNİZ :(","Tekrar Dene!","error");
				harfleriYaz(kelime);
				harfPasif();
				document.getElementById("diziResim").src=adam[7];
			}

		
		}
	});
	harfSec();
})();

function kelimeYer(kelime)
{
	var kelimeYer=document.getElementById("kelimeYer");
	kelimeYer.innerHTML="";

	
	harfAktif();
	counter=0;
 
	for(var i=0;i<kelime.length;i++)
	{
		var harf = document.createElement("button");
		harf.setAttribute("type","button")
		harf.classList.add("btn", "btnharf");
		harf.textContent="_";
		kelimeYer.appendChild(harf);
		document.getElementById("diziResim").src=adam[0];
	}
}

function harfPasif()
{
	harf.forEach(function(eleman){
	eleman.setAttribute("disabled","disabled");
});
 
}
function harfAktif()
{
	harf.forEach(function(eleman){
	eleman.removeAttribute("disabled");
});
}

function harfSec()
{
	var i=Math.round(Math.random()*kelimeler.length);
	kelime=new String(kelimeler[i]);
	kelime=kelime.split("");

	kelimeYer(kelime);
	counter=1;
	
}

function harfKontrol(kelime,harf){
	return kelime.some(x => x ==harf );
}
 
function harfKoy(kelime,harf){
	var btnharf= document.querySelectorAll(".btnharf");
	for(i in kelime)
	{
		if(harf==kelime[i])
		{
			btnharf[i].textContent=harf;
		}
	}
}

function harfleriYaz(kelime)
{
	var btnharf= document.querySelectorAll(".btnharf");
	for(i in kelime)
	{
		harfKoy(kelime,kelime[i]);
	}

}
function harfEkle(harf)
{
	
}
function tireKontrol()
{
	var kontrol= false;
	var btnharf= document.querySelectorAll(".btnharf");
 
	for(i in btnharf)
	{
 
		if(btnharf[i].textContent=="_")
		{
			kontrol=true;
		}
	}
	return kontrol;

}
 