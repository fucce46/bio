document.addEventListener('DOMContentLoaded', () => {
    const aboutTextElement = document.getElementById('about-text');
    // Removed themeToggle constant as the switch is removed
    const body = document.body; // Still need body to ensure class is set

    // Цельный текст для раздела "Обо мне"
    const aboutMeText = "Приветствую! Я fucce, занимаюсь трафиком и кодингом. Моя цель - запустить ваш проект, чтобы он приносил вам доход. Я открыт к сотрудничеству в области трафика для ваших проектов и кодинга. Работаю в сфере трафика с 2023 года.";

    // Инициализируем текст при загрузке страницы
    aboutTextElement.textContent = aboutMeText;

    // Плавный скролл для якорных ссылок (теперь их почти нет)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Removed theme switch logic (event listener and localStorage checks)

    // Ensure dark theme is always applied since the switch is gone
    body.classList.add('dark-theme');
});