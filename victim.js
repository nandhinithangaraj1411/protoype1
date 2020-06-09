class Victim{
constructor(){
//this.name=name;
//this.contact=contact;
this.highwayno=null;
//this.state=state;
//this.severity=severity
}
async getHospitalInfo(){
console.log("Getting info" + this.highwayno);
//isAccident=false;
var ref=await database.ref('highways')
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
//if(allHospitals!==undefined){
     allHospitals=data.val();
     
})

}
displayInfo(){
if(allHospitals !==undefined){
     console.log(allHospitals)
     var displayPos=100
for(var i in allHospitals){
      var jhospital = allHospitals[i]
 if(jhospital !== undefined){
     for(var k in jhospital){
        console.log(jhospital[k])
        fill ("red")
        textSize(12)
        text("Hospital :"+jhospital[k].name,400,displayPos)
        text("Hospital address:"+jhospital[k].address,400,displayPos+20)
        text("Hospital contact:"+jhospital[k].contact,400,displayPos+40)
        displayPos=displayPos+80
        }
     }
}

}
}}
