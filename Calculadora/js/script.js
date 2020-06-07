
  

function calcular (tipo, valor) {
  if (tipo== 'operacao') {
    if(valor=='c') {
      document.getElementById('resultado').value = ''
    }

    else if (valor=='+' || valor =='-' || valor == '/' || valor == '*' || valor == '.') {
      document.getElementById('resultado').value += valor
    }

    else if (valor ==='calc') {
      var calcula = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = calcula
    }

  }

  else {
    document.getElementById('resultado').value += valor
    
  }
}