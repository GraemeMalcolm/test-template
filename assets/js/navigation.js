// Navigation functionality for content pages
document.addEventListener('DOMContentLoaded', function () {
    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        // Left arrow for previous
        if (e.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.prev-button:not(.disabled)');
            if (prevButton) {
                window.location.href = prevButton.href;
            }
        }
        // Right arrow for next
        else if (e.key === 'ArrowRight') {
            const nextButton = document.querySelector('.next-button:not(.disabled)');
            if (nextButton) {
                window.location.href = nextButton.href;
            }
        }
    });

    // Smooth scroll for anchored content
    const scrollableContent = document.querySelector('.scrollable-content');
    if (scrollableContent) {
        // Save scroll position
        const scrollKey = 'scroll_' + window.location.pathname;
        const savedPosition = sessionStorage.getItem(scrollKey);
        if (savedPosition) {
            scrollableContent.scrollTop = parseInt(savedPosition, 10);
        }

        // Save on scroll
        scrollableContent.addEventListener('scroll', function () {
            sessionStorage.setItem(scrollKey, scrollableContent.scrollTop);
        });
    }
});
