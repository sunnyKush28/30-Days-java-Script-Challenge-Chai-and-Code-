const handleSubmit = () => {
    const user = document.getElementById('username').value
    if (!user) {
        alert('Please provide Username')

    } else {
        localStorage.setItem('user', user)
        window.location.href = './index.html'
    }

}