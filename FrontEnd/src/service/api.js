async function fetchShoes() {
    try {
        const response = await fetch('https://api-store-do1w.onrender.com/shoes');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        // Supondo que data seja um array de itens
        data.forEach(item => {
            console.log(item); // Aqui você pode manipular cada item conforme necessário
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Chame a função para executar o fetch
fetchShoes();