let confirmMessage = confirm("Begin?");

if (confirmMessage) {
    let promptwhoisThere = prompt('Who"s there?');

    if (promptwhoisThere == 'Admin') {
        let promptAdminPass = prompt('Admin password')
        if (promptAdminPass == '153351' ) {
            alert('Welcome!')
        } else {
            alert('Wrong password')
        }
    } else {
        alert('Username is wrong')
    }
} else {
    console.log('User cancelled');
}