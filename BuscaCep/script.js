function buscarCEP() {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");

  if (cep.length !== 8) {
    alert("CEP inválido! Digite 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }

      document.getElementById("rua").innerText = data.logradouro || "N/A";
      document.getElementById("bairro").innerText = data.bairro || "N/A";
      document.getElementById("cidade").innerText = data.localidade || "N/A";
      document.getElementById("estado").innerText = data.uf || "N/A";
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao buscar o CEP.");
    });
}
