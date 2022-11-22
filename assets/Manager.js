const Employee = require('./Employee');

 class Manager extends Employee{
    constructor(id,email,officeNumber){
    super(id,email,);
    this.officeNumber = officeNumber;
}

 getOfficeNumber(){
    return this.officeNumber;
 }
 getRole(){
   return "Manager";
 }
 }
 module.exports = Manager;