// Nastavení HTTP požadavku
const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic dsGzdFaB812ULASA41JlOTQwOGFkMzAxN2Y2lakMDo=' // API klíč
    },
    body: JSON.stringify({
        type: 'imageannotation', // O jaký typ anotace se má jednat
        name: 'car_labelling', // Název projektu
        rapid: false, // Zda se má jednat o Rapid projekt
        params: { instruction: 'Please, label the cars.' } // Instrukce pro Scale
    })
};

// Volání API pomocí fetch API
fetch('https://api.scale.com/v1/projects', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));