const getUsers = (req, res) => {
    res.send('Users');
}

const postUsers = (req, res) => {
    res.send('posting users');
}

module.exports = {getUsers, postUsers};