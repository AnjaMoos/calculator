function addedOperation(Operation) {
    document.getElementById('Affe').innerHTML +=Operation;
}

function claculateResult() {
    let container = document.getElementById('Affe');
    let result = eval(container.innerHTML);
    container.innerHTML = result.toFixed(2);
}

function deleatlast() {
    let container = document.getElementById('Affe');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else
    {container.innerHTML = container.innerHTML.slice(0, -1);}
}

function allesLoeschen(){
    let container = document.getElementById('Affe');
    container.innerHTML ="";
}