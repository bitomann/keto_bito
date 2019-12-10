// This module handles all calls to our API. 
// authors:  Caroline Brownlee, Bito Mann, Julian Garcia, Sam Pita //

const remoteURL = "http://localhost:5002"
// TableName = array (events, tasks, messages, articles, friends, users).

export default {
    // This fetch call gets one object from tableName.
    get(tableName, id) {
        return fetch(`${remoteURL}/${tableName}/${id}`).then(result => result.json())
    },
    // This fetch call gets all objects from tableName.
    getAll(tableName) {
        return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
    },
    getAllforLoggedInUser(userId, tableName) {
        return fetch(`${remoteURL}/users/${userId}/${tableName}`).then(result => result.json())
    },
    // This fetch call uses _expand to get all objects including the name associated with the userId.
    getAllWithUserNames(tableName, userId) {
        return fetch(`${remoteURL}/${tableName}?_expand=user`).then(result => result.json(userId))
    },

    delete(tableName, id) {
        // This fetch call grabs the id of a single object and deletes it from tableName. 
        return fetch(`${remoteURL}/${tableName}/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    // This fetch call posts a new object to tableName.  
    post(tableName, newEvent) {
        return fetch(`${remoteURL}/${tableName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(data => data.json())
    },
    patch(tableName, editedObject) {
        return fetch(`${remoteURL}/${tableName}/${editedObject.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json())
    },
    // This fetch call is for EDITING a single object, grabs object data from API via id
    update(tableName, editedObject) {
        return fetch(`${remoteURL}/${tableName}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
    // BELOW FETCH CALLS ARE FOR AUTHENTICATION
    // getLoggedInUser(userId) {
    //     return fetch(`${remoteURL}/users/${userId}`)
    //         .then(response => response.json())
    // },
    // getLoggedInUsersTableData(userId, tableName) {
    //     return fetch(`${remoteURL}/users/${userId}&${tableName}?_expand=user`)
    //         .then(response => response.json())
    // },
    // getAllWithUserNames(tableName) {
    //     return fetch(`${remoteURL}/${tableName}?_expand=user`).then(result => result.json())
    // },
    getUserData() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json())
    },
    createNewUser(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(results => results.json())
    },
    checkUser(email, password) {
        return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
            .then(response => response.json())
    }
}