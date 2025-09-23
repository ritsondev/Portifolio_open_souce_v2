function sendWhatsApp(event){

    event.preventDefault();
const nome = document.getElementById("name").value;
const message = document.getElementById("msg").value;
const phone = "976418992";

const text = `olá mmeu nome é ${nome}, ${message} `;

const msgnospace = encodeURIComponent(text);

const link = `https://wa.me/${phone}?text=${msgnospace}`;

    window.open(link,);

}

