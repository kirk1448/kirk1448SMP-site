document.addEventListener('DOMContentLoaded', function() {
    // Markdown-контент (можно загружать и из внешнего файла)

    const markdownText = `
<div align = "center"> 

# kirk1448 SMP

<div align = "left"> 

Тут пока-что ничего нет...

<div align = "center"> 

<br>

<br>

<br>

<br>

<hr>

### Контакты
По всем вопросам обращайтесь:  
https://t.me/kirk1448

Также подпишитесь на соц. сети:<br>
[<img width="32" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg">](https://t.me/kirk1448SMP)
`;

    // Инициализация модального окна
    const modal = document.getElementById('markdown-modal');
    const opener = document.querySelector('.modal-opener');
    const closer = document.querySelector('.close-modal');
    const markdownContainer = document.getElementById('markdown-content');

    // Преобразуем Markdown в HTML
    markdownContainer.innerHTML = marked.parse(markdownText);

    // Открытие модального окна
    opener.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });

    // Закрытие модального окна
    closer.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрытие при клике вне контента
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});