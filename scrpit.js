function dados() {
    var estilo = document.getElementById('body');
    var nome = document.getElementById('nome').value;
    var comentario = [
        document.getElementById('comentario').value
    ]
   

    for (var i = 0; i < comentario.length; i++) {
        document.getElementById('result').innerHTML += nome + (' : ') + comentario [i] + '<br />';
    }
}

function alterarCss() {
    // declaração de variáveis
    var estilo = document.getElementById('body');
    var corTexto = document.getElementById('cor-texto').value;
    var corFundo = document.getElementById('cor-fundo').value;
    var tamanhoTexto = document.getElementById('tamanho-texto').value;
    var comentario = document.getElementById('comentario').value;

    // mudar estilização da página
    estilo.style = 'color: ' + corTexto + '; background-color: ' + corFundo + '; font-size: ' + tamanhoTexto + 'px;';
}

