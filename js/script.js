document.addEventListener('DOMContentLoaded', async () => {
    const mdFiles = {
        'about': 'md/about.md',
        'cit': 'md/cit.md'
    };

    // Загрузка всех MD-файлов
    try {
        await Promise.all(
            Object.entries(mdFiles).map(async ([id, path]) => {
                try {
                    const response = await fetch(path);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const md = await response.text();
                    document.getElementById(`${id}-content`).innerHTML = marked.parse(md);
                } catch (error) {
                    console.error(`Ошибка загрузки ${path}:`, error);
                    document.getElementById(`${id}-content`).innerHTML = `
                        <div class="error">
                            <h3 style="color:red">Ошибка загрузки контента</h3>
                            <p>Файл ${path} не загружен</p>
                            <p>${error.message}</p>
                        </div>
                    `;
                }
            })
        );
    } catch (error) {
        console.error("Критическая ошибка:", error);
    }

    // Управление модалками
    document.querySelectorAll('.modal-opener').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = `modal-${btn.dataset.md}`;
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Закрытие по клику вне окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});