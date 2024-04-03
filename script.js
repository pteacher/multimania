document.getElementById('personality-test').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем отправку формы

    // Получаем ответы на вопросы
    const answers = {
        'q1': document.querySelector('input[name="q1"]:checked').value,
        // Добавьте остальные ответы здесь, аналогично первому вопросу
    };

    // Считаем частоту ответов
    const counts = {};
    for (const answer in answers) {
        counts[answers[answer]] = (counts[answers[answer]] || 0) + 1;
    }

    // Определяем наиболее часто встречающийся ответ
    let result;
    let maxCount = -1;
    for (const answer in counts) {
        if (counts[answer] > maxCount) {
            maxCount = counts[answer];
            result = answer;
        }
    }

    // Отображаем результат
    let personality;
    switch(result) {
        case 'a':
            personality = 'ученый';
            break;
        case 'b':
            personality = 'изобретатель';
            break;
        case 'c':
            personality = 'предприниматель';
            break;
        case 'd':
            personality = 'интегратор проектов';
            break;
    }
    document.getElementById('result').innerHTML = `Ваш тип личности: ${personality}`;
});
