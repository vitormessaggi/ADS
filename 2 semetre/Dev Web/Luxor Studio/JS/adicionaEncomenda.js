document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.cad');
  const tabela = document.getElementById('tabela-clientes');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nome = document.getElementById('nomesobrenome').value.trim();
    const produto = document.getElementById('produto').value.trim();
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const unitario = parseFloat(document.getElementById('unit').value);

    if (!nome || !produto || isNaN(quantidade) || isNaN(unitario)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const total = (quantidade * unitario).toFixed(2);

    const tr = document.createElement('tr');
    tr.classList.add('cliente');

    tr.innerHTML = `
      <td class="nome">${nome}</td>
      <td class="produto">${produto}</td>
      <td class="qtd">${quantidade}</td>
      <td class="unitario">R$${unitario.toFixed(2)}</td>
      <td class="total">${total}</td>
    `;

    tabela.appendChild(tr);
    form.reset();
  });
});


