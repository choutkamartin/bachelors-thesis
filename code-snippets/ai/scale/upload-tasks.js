const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic dsGzdFaB812ULASA41JlOTQwOGFkMzAxN2Y2lakMDo='
    },
    body: JSON.stringify({
        instruction: 'Please label all the cars.',
        attachment: 'https://i.imgur.com/iDZcXfS.png',
        geometries: { box: { objects_to_annotate: ['car'] } },
        priority: 10,
        project: 'car_labelling',
        callback_url: 'email@martinchoutka.cz'
    })
};

fetch('https://api.scale.com/v1/task/imageannotation', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));