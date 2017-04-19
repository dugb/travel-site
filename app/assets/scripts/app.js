var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes.");
  }
}

//alert("test ABC");

var john = new Person("John Doe", "blue");
var jane = new Adult("Jane Smith", "orange");

john.greet();
jane.greet();
jane.payTaxes();

$('h1').remove();
