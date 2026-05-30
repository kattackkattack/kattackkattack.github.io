const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Получаем ID вкладки из data-tab атрибута
    const tabId = button.getAttribute('data-tab');
    
    // Убираем активный класс у всех
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Активируем текущие
    button.classList.add('active');
    
    // Находим нужный контент по ID
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  });
});