function atvaltas () {
     
    let forint = document.getElementById("forint").value 

    let jen = forint / 2.88
    let euro = forint / 404
    let dollar = forint / 376.48

    document.getElementById("euro").value = euro
    document.getElementById("usd").value = dollar
    document.getElementById("japanjen").value = jen
}