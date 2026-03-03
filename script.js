function enviarWhatsapp(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    const telefone = '5547997817965'

    const texto = `Olá! me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank');

};

