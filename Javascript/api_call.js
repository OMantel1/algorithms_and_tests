async function apiCall(){
    try{
        const response = await fetch('http://jsonplaceholder.typicode.com/users/1');
        const data = await response.json()
        return data
    }catch {
        return "error"
    }
}

module.exports = apiCall