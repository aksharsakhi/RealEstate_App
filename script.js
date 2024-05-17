// Sample JavaScript for search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterProperties);

    function filterProperties() {
        const query = searchInput.value.toLowerCase();
        const properties = document.querySelectorAll('.property');

        properties.forEach(property => {
            const title = property.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                property.style.display = 'block';
            } else {
                property.style.display = 'none';
            }
        });
    }
});
