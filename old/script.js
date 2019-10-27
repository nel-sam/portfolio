display('home');

function display(id) {
    const body = document.getElementsByTagName("BODY")[0];

    switch (id) {
        case 'home':
            break;
        case 'csharp':
            break;
        case 'angular':
            break;
        case 'flutter':
            //body.style.backgroundColor = "green";
            break;
    }

    const contentSections = document.getElementsByClassName('content-main');

    for (var i = 0; i < contentSections.length; i++) {
        contentSections.item(i).classList.add('hidden');
    }

    document.getElementById(id).classList.remove('hidden');
}