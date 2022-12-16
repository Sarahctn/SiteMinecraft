function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == '/css/pages_sauf_index.css') {
        theme.setAttribute('href', '/css/pages_sauf_index_sombre.css');
    } else {
        theme.setAttribute('href', '/css/pages_sauf_index.css');
    }
}