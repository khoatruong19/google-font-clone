const addFont = (name: string, url= "") => {
    const newStyle = document.createElement('style');
    let formatedUrl = url
    if(!formatedUrl.includes("https")) formatedUrl = formatedUrl.replace("http", "https")
    newStyle.appendChild(document.createTextNode('@font-face{font-family: '+name+'; src: url('+formatedUrl+');}'));
    document.head.appendChild(newStyle)

    return newStyle
}

export {addFont}