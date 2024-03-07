export function htmlOsszeAllit(lista) {
    /* Állítsd össze a HTML kódot */
    console.log(lista)
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element) // objektum
        txt += `<div class="kep"><img src="${element.kep}" alt="${element.cim}"></div>`;
    }
    console.log(txt);
    return txt
}
