display('developer');

function display(id) {
    const body = document.getElementsByTagName("BODY")[0];

    switch (id) {
        case 'developer':
            break;
        case 'language':
            break;
        case 'music':
            //body.style.backgroundColor = "green";
            break;
    }

    const contentSections = document.getElementsByClassName('content-main');

    for (var i = 0; i < contentSections.length; i++) {
        contentSections.item(i).classList.add('hidden');
    }

    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('mobile-menu-button')
.addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');

    if (!menu.style.display || menu.style.display === 'none') {
        menu.style.display = 'inherit';
    } else {
        menu.style.display = 'none';
    }
});