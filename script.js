 document.addEventListener('DOMContentLoaded', function() {
            // Функция для проверки видимости элемента
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                    rect.bottom >= 0
                );
            }
            
            // Функция для обработки скролла
            function handleScroll() {
                const sections = document.querySelectorAll('.section-animate');
                
                sections.forEach(section => {
                    if (isElementInViewport(section)) {
                        section.classList.add('section-visible');
                    }
                });
            }
            
            // Проверяем при загрузке страницы
            handleScroll();
            
            // Добавляем обработчик скролла
            window.addEventListener('scroll', handleScroll);
            
            // Делаем header сразу видимым
            const header = document.querySelector('header');
            if (header) {
                header.classList.add('section-visible');
            }
        });