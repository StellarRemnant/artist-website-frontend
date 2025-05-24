document.getElementById('clear_button').addEventListener('click', () => {
    const searchInput = document.getElementById('search_bar');
    searchInput.value = '';
    document.getElementById('suggestions').innerHTML = '';
    document.getElementById('suggestions').style.display = 'none';
});
