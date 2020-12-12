import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductserviceService } from './../productservice.service';
import { UserService } from './../_services/user.service';
import { Appointments } from './../appointment.model';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  app : Appointments[]=[]
  constructor(public appoint:ProductserviceService,private fb: FormBuilder) { 


  }

  filterapp : Appointments[] =[];

  onSearch(){
    console.log(this.search.value)
    if(this.search.value.value=="M"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="Male")

    }
    else if(this.search.value.value=="F"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="Female")
    }
    else if(this.search.value.value=="N"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="No preference")
    }
  }


  search = this.fb.group({
    value : [""]
  });


  
x=[]
  ngOnInit() {
    this.app=this.appoint.fetch()
    console.log(this.app)
    for (let key of this.app) {
      for(var i in key){
           this.x.push(i)
      }

     }
this.filterapp=this.app

  }
  
  getfitness() {
    
  }
}
