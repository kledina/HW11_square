let inputfield = document.getElementsByClassName('inputfield');
function capitalizeName(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}
const postIt = () => {
    let username = document.getElementById('username').value.replace('/\s+/g', ' ').trim();
    let avatar = document.getElementById('avatar').value;
    let message = document.getElementById('message').value;
    let usernameArray = username.split(' ');
    let updatedUsername = ' ';
    usernameArray.forEach((item) => {
        updatedUsername = capitalizeName(item) + ' ' + updatedUsername;
    })
    inputfield[0].value = updatedUsername;

    document.getElementById('pic').src = avatar;

    newMessage.value = message.replace(/viagra|xxx/gi, '***');
}