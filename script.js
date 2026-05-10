// Получаем кнопку по ID
const btn = document.getElementById("notifyBtn");

// Проверка, чтобы не было ошибки если элемент не найден
if (btn) {
    btn.addEventListener("click", () => {
        alert("Ты будешь уведомлён о релизе!");
    });
}
