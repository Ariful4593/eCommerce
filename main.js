function Ariful(fname,mname,home,district){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
}
function Shoraful(fname,mname,home,district){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
}
function Selim(fname,mname,home,district){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
}
function Karim(fname,mname,home,district){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
}
function Nafim(fname,mname,home,district){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
}
function Singh(fname,mname,home,district,image){
    this.Father = fname;
    this.Mother = mname;
    this.Home = home;
    this.district = district;
    this.Image = image;
}

var myFather = new Ariful('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong');
var myFather1 = new Shoraful('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong');
var myFather2 = new Selim('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong');
var myFather3 = new Karim('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong');
var myFather4 = new Nafim('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong');
var myFather5 = new Singh('Shirajul Islam','Shamim Akter','Khagoria', 'Chittagong','images/jacket.jpg');
// console.log(myFather,myFather1,myFather2);

array = [myFather,myFather1,myFather2,myFather3,myFather4,myFather5];
for(i=0;i<6;i++)
{
    console.log(array[i]);  
}
// document.getElementById("demo").innerHTML = window.location.href;