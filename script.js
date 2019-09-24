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

let mobileMenuButtonOpen = false;
const mobileMenuButton = document.getElementById('mobile-menu-button');
mobileMenuButton.addEventListener('click', () => {
    const navMobile = document.getElementById('nav-menu');

    if (mobileMenuButtonOpen) {
        navMobile.classList.add('hidden');
        mobileMenuButtonOpen = false;
    } else {
        navMobile.classList.remove('hidden');
        mobileMenuButtonOpen = true;
    }
});