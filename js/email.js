const btn = document.getElementById('button');
    document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
    //btn.value = 'Enviando...';
        const serviceID = 'service_k39qr1h';
        const templateID = 'template_h4b362l';
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'email enviado correctamente',
                showConfirmButton: false,
                timer: 1500
                })
        }, (err) => {
            Swal.fire({
                icon: 'error',
                title: 'No enviado',
                text: 'El mail no puedo ser enviado'
                })
        });
    });