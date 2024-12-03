<script>
// Create an intersection observer to trigger animations when cards come into view
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        root: null, // Observing within the viewport
        threshold: 0.5 // Trigger when 50% of the card is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cards.forEach(card => {
        observer.observe(card); // Observe each card
    });
});
</script>
