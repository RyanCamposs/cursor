function alias() {
    let alias = document.getElementById('alias');
    let res = document.getElementById('res');

    alias.style.cursor = 'alias';
    res.innerText = 'cursor: alias'

}

function allscroll() {
    let allscroll = document.getElementById('allscroll');
    let res = document.getElementById('res');

    allscroll.style.cursor = 'all-scroll';
    res.innerText = 'cursor: all-scroll'

}

function auto() {
    let auto = document.getElementById('auto');
    let res = document.getElementById('res');

    auto.style.cursor = 'auto';
    res.innerText = 'cursor: auto'

}

function cell(){
    let cell = document.getElementById('cell');
    let res = document.getElementById('res');

    cell.style.cursor = 'cell';
    res.innerText = 'cursor: cell'
}


function contextmenu() {
    let contextmenu = document.getElementById('context-menu');
    let res = document.getElementById('res');

    contextmenu.style.cursor = 'context-menu';
    res.innerText = 'cursor: context-menu'
}

function colresize() {
    let colresize = document.getElementById('col-resize');
    let res = document.getElementById('res');

    colresize.style.cursor = 'col-resize';
    res.innerText = 'cursor: col-resize'
}

function copy() {
    let copy = document.getElementById('copy');
    let res = document.getElementById('res');

    copy.style.cursor = 'copy';
    res.innerText = 'cursor: copy'
}

function crosshair() {
    let crosshair = document.getElementById('crosshair');
    let res = document.getElementById('res');

    crosshair.style.cursor = 'crosshair';
    res.innerText = 'cursor: crosshair'
}

function dft() {
    let dft = document.getElementById('default');
    let res = document.getElementById('res');

    dft.style.cursor = 'default';
    res.innerText = 'cursor: default'
}

function eresize() {
    let eresize = document.getElementById('e-resize');
    let res = document.getElementById('res');

    eresize.style.cursor = 'e-resize';
    res.innerText = 'cursor: e-resize'
}

function ewresize() {
    let ewresize = document.getElementById('ew-resize');
    let res = document.getElementById('res');

    ewresize.style.cursor = 'ew-resize';
    res.innerText = 'cursor: ew-resize'
}

function grab() {
    let grab = document.getElementById('grab');
    let res = document.getElementById('res');

    grab.style.cursor = 'grab';
    res.innerText = 'cursor: grab'
}

function fundo() {
    let corpo = document.querySelector('body') ;
    var lista = document.querySelectorAll(".li");

    corpo.classList.toggle('black');
    lista.classList.toggle('black-border');

}

function copiarTexto() {
    var texto = document.getElementById('res');
    texto.select()
    document.execCommand("copy")
}