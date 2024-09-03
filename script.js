document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Cria uma nova linha na tabela
        const newRow = contactTable.insertRow();

        // Cria as células para a nova linha
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        // Define o conteúdo das células
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpa os campos do formulário
        form.reset();
    });
});
