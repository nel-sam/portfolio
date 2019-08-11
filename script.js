display('home');

function display(id) {
    const body = document.getElementsByTagName("BODY")[0];

    switch (id) {
        case 'home':
            body.style.backgroundImage = "url('images/lago.jpg')";
            break;
        case 'csharp':
            body.style.backgroundImage = "url('images/oregon.jpg')";
            break;
        case 'angular':
            body.style.backgroundImage = "url('images/japan.jpg')";
            break;
        case 'flutter':
            body.style.backgroundImage = "url('images/arizona.jpg')";
            break;
    }

    const contentSections = document.getElementsByClassName('content-main');

    for (var i = 0; i < contentSections.length; i++) {
        contentSections.item(i).classList.add('hidden');
    }

    document.getElementById(id).classList.remove('hidden');
}