const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const oink = {
        name,
        content
    };

    form.style.display = 'none';
    loadingElement.style.display = '';
});