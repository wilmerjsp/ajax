$(document).ready(function() {
    $('#formulario').bind('submit', function(){

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (data) {
                $('#respuesta').html(data);
            },
            error: function () {
                alert('Error al enviar los datos')
            }
        });

        return false;
    })
})