function CreateRandomNumber(){
    const arr=[]
    for (let i =0; i<Math.floor(Math.random() *(20-10)) +10;i++){
        arr.push(Math.floor(Math.random() *(100-10)) +10);
    }
    document.getElementById('createrondom').innerHTML=arr.join(", ");
}

function Raise(){
    const arr= document.getElementById('createrondom').innerHTML.split(',')
    if(document.getElementById('raise').checked == true){
        arr.sort(function(a, b){return a - b});
        document.getElementById('createrondomChanged').innerHTML=arr;
    }
}

function Reduction(){
    const arr= document.getElementById('createrondom').innerHTML.split(',')
    if(document.getElementById('reduction').checked == true){
        arr.sort(function(a, b){return b - a});
        document.getElementById('createrondomChanged').innerHTML=arr;
     }
}

function More(){
    position = document.getElementById('position').value
    VaLue = document.getElementById('VaLue').value
    arr=document.getElementById('createrondomChanged').innerHTML.split(',')
    arr.splice(position, 0, VaLue)
    document.getElementById('createrondomChanged').innerHTML=arr.join(",");
}

