import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:'<h1>hello</h1>'*/
  styleUrls: ['./app.component.css'],
  /*styles:['h1{color:red}']*/

})
export class AppComponent {

  reciveName:string;
  reciveData($event){
    this.reciveName=$event;
  }




  title = 'app';
  myUrl:string="http://lorempixel.com/400/200/";

  cname="Jspiders";
  name:string="Sathish";
  myPlace:string="Hassan";
  id:number=5222;
  myname:string;

  user:string="Sathish";

  //add function
  result:number;
  add(a,b){
this.result=a+b;
  }

 // isTrue:boolean=false;
a=false;
  course:string="-select-"
data=[2,5,4,20,3,100,55];
  courses=['java','css','angularjs'];
  display(){
    this.myname="YourName:Sathish";
  }

  students:string[]=['arun',
    'kumar','guldu','guldi','pinki','ponki'];

  Employee:any=[
    {
    name:'sathish',
    id:522,
    salary:5000
  },
{
  name:'Kushi',
  id:6963,
  salary:9000
},
{
  name:'pooja',
    id:56332,
  salary:5689
}];


  myName:string="sathish";
  Cname="JSPIDERS";
  amount:number=223.980567;

  avg:number=1.5;

  today:Date=new Date();


  mYcourse:string="angularjs";

  message="";
  reciveMsg($event){
    this.message=$event;
  }



}
