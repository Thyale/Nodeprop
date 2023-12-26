function lista() {
  var lista = window.document.querySelector('div.lista')
  if (lista.style.display == "block") {
    lista.style.display = "none"
  } else {
    lista.style.display = "block"
  }
}