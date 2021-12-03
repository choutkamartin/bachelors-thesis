const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic dsGzdFaB812ULASA41JlOTQwOGFkMzAxN2Y2lakMDo='
    },
    body: JSON.stringify({
        type: 'imageannotation',
        name: 'car_labelling',
        rapid: false,
        params: { instruction: 'Please, label the cars.' }
    })
};

fetch('https://api.scale.com/v1/projects', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));