// Global Variables
let [form] = document.getElementsByTagName('form')
let authorCrud = [
    {
        title: 'Add Author',
        button: 'Add'
    },
    {
        title: 'Edit Author',
        button: 'Edit'
    },
    {
        title: 'Delete Author',
        button: 'Delete'
    }
];

for (item of authorCrud) {
    form.innerHTML += `
        <fieldset>
            <legend>${item.title}</legend>
            <input 
                type='text'
                id='addAuthorGivenName'
                name='addAuthorGivenName'
                placeholder='First Name' />
            <input 
                type='text'
                id='addAuthorSurname'
                name='addAuthorSurname'
                placeholder='Last Name' />
            <input 
                type='text'
                id='addAuthourNationality'
                name='addAuthourNationality'
                placeholder='Nationality' />
            <label>Birth Year</label>
            <input 
                type='date'
                id='addAuthorBirthYear'
                name='addAuthorBirthYear' />
            <label>Death Year</label>
            <input 
                type='date'
                id='addAuthorDeathYear'
                name='addAuthorDeathYear' />
            <input 
                type='submit'
                value='${item.button}' />
        </fieldset>
    `;
}

