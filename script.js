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
}