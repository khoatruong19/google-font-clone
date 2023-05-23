const addFont = (name: string, url: string) => {
    const newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode('@font-face{font-family: '+name+'; src: url('+url+');}'));
    document.body.appendChild(newStyle)
}

export {addFont}