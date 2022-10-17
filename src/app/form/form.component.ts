import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  a:any[] =[]
  h:any
  j:any
  q:any
  i:any
  m:any
  b:any[] =[]
  c:any[] =[]
  z:any
        fun(t:any,d:any,m:any)
         {             
              if((t=='') && (d=='') && (m=='')) 
              {

              }  
              else{ 
              this.h="Email id"
              this.j="Age"
              this.q="Name"
              this.a.push({t})
              this.b.push({m}) 
              this.c.push({d})    
              this.z="Successfully Booked. Owner will reach you shortly!!"      
              }
              
         }
         delete1(i:any){
          this.a.splice(i,1)
          this.b.splice(i,1)
          this.c.splice(i,1)
          this.h=''
          this.j=''
          this.q=''
          this.z=''
         } 
  ngOnInit(): void {    
  }
}