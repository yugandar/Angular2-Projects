import { Component, OnInit } from '@angular/core';
import { CountriesService} from '../countries.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countri:CountriesService) { }

  ngOnInit() {
  }
  isTrue:boolean;
  isTrue1:boolean;
  listOfCountries=[];
  errMsg:string;
  getCountries(countryname){
    this.countri.getCountries(countryname).subscribe(
      data=>{
        this.listOfCountries=data;
        this.isTrue=true;
        this.isTrue1=false;
        //console.log(data);
      },
      error=>{
        this.errMsg=" Countries not found";
        this.isTrue=false;
        this.isTrue1=true;
      }
    )


  }
}
