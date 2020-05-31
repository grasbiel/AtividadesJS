function calculadora() {
  var num1 = window.document.getElementById('num1')
  var num2 = window.document.getElementById('num2')
  var opcoes = window.document.getElementsByName('opcao')
  var opcao;
  
  for (var i=0; i<opcoes.length; i++) {
    if (opcoes[i].checked) {
      opcao = Number(opcoes[i].value);
    }
  }

  var res = window.document.getElementById('res')
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)
  
  switch (opcao) {
    case 1:
      result = n1 + n2
      res.innerText = ` ${result} `
      break;

    case 2:
      result = n1 - n2
      res.innerText = ` ${result} ` 
      break;

    case 3:
      result = n1 * n2
      res.innerHTML = `${result} `
  }
  
}