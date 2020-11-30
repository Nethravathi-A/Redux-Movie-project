console.log(3/2);
console.log(Math.floor(3/2));
var name='kittens';
if(name=='puppies')
{
    console.log(name+='woof');
}
else if(name=='kittens')
{
    console.log(name+='   '+'meow')
}
else{
    console.log(name+='')
}
var i;
for(i=0;i<5;i++)
{
    console.log(i);
}
var age=23;
var allowed=(age>18)?'yes':'no';
console.log(allowed);

function Eat() {
    console.log("Eating");
}
function Dra()
{
    console.log("Drawing");
}
function nothing()
{
    console.log("do nothing");
}
var action;
switch(action){
    case 1:
        Eat();
        break;
        case 2:
            Dra();
            break;
            default:
                nothing();

}













