function clicked(event : Event)
{
let header=document.getElementById("myHeader")as HTMLElement;
if(header.className=="green")
 {header.className="red";}
 else
 {header.className="green";}

}