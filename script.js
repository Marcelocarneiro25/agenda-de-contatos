document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const newRow = contactTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        form.reset();
    });
});
