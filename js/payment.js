document.getElementById('payment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get card details from the form
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Use Launch API to submit payment details
    const response = await Launch.processPayment({
        name: cardName,
        number: cardNumber,
        expiry: expiryDate,
        cvv: cvv
    });

    if (response.success) {
        alert('Payment successful');
    } else {
        alert('Payment failed: ' + response.error);
    }
});
