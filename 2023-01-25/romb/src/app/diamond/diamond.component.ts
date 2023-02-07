import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent {
aside =new FormControl("");
alpha =new FormControl("");
perimiter =new FormControl("");
area =new FormControl("");



onekeyUp(event:any){
  if(event.key=="Enter"){
    this.onEnterHandler()
  }
}

onEnterHandler(){
  let aside=Number(this.aside.value);
  let alpha=Number(this.aside.value);
  let perimiter=this.calcPerimater(aside);
  let area=this.calcArea(aside,alpha);
  this.perimiter.setValue(String(perimiter));
  this.area.setValue(String(area));
}
calcPerimater(aside:number){
return aside*4;
}
calcArea(aside:number,alpha:number){
  let rad=alpha*Math.PI/100;
  let area=Math.pow(aside,2)*Math.sin(rad);
  return area
}

}
