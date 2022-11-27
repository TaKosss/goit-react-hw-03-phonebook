export function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
}

export function setContactsToStorage(contacts) {
    
    localStorage.setItem('contacts', JSON.stringify(contacts));
}