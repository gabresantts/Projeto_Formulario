// Máscara simples de telefone
document.getElementById("telefone").addEventListener("input", function(e) {
  let valor = e.target.value.replace(/\D/g, "");
  if (valor.length > 0) valor = "(" + valor;
  if (valor.length > 3) valor = valor.slice(0, 3) + ") " + valor.slice(3);
  if (valor.length > 10) valor = valor.slice(0, 10) + "-" + valor.slice(10, 15);
  e.target.value = valor.slice(0, 15);
});

// Submissão com validação
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert("Formulário enviado com sucesso!");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});