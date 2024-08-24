function getElementWidth(content, padding, border) {    
    const numContent = Number.parseFloat(content);
    const numPadding = Number.parseFloat(padding);
    const numBorder = Number.parseFloat(border);
    getElementWidth = numContent + (numPadding + numBorder) * 2;
    return getElementWidth;
}

