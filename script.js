document.addEventListener('DOMContentLoaded', () => {
    const aboutTextElement = document.getElementById('about-text');

    // Цельный текст для раздела "Обо мне"
    const aboutMeText = "Приветствую! Я fucce, занимаюсь трафиком и кодингом. Моя цель - запустить ваш проект, чтобы он приносил вам доход. Я открыт к сотрудничеству в области трафика для ваших проектов и кодинга. Работаю в сфере трафика с 2023 года.";

    // Инициализируем текст при загрузке страницы
    aboutTextElement.textContent = aboutMeText;

    // Плавный скролл для якорных ссылок (если будут добавлены)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Удалены все обработчики событий для скролла, свайпов и клавиш, так как возвращаемся к одной карточке.
});
