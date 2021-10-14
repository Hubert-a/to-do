document.getElementById('button').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display='flex'
});

var todo=[];
document.getElementById("demo").innerHTML = todo;

document.getElementById('submit').addEventListener('click',
    function(event){
    event.preventDefault();
    document.querySelector('.bg-modal').style.display='none'
});

myFunc=()=>{
    var input = document.getElementById("input").value;
    todo.push(input);
    document.getElementById("demo").innerHTML = todo;
    // document.getElementById("display").innerHTML =
}
