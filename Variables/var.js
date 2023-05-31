console.log(value); //undefined
var value=10

val=20
console.log(val); //20
var value=10

function print()
{
    let num=12;
    if(true){
        var num=34
        console.log(num)
    }
    console.log(num)
}
print()