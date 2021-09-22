// Global Variables
let [form] = document.getElementsByTagName('form')
let authorCrud = [
    {
        title: 'Register User',
        button: 'Register'
    },
    {
        title: 'Edit User',
        button: 'Edit'
    },
    {
        title: 'Delete User',
        button: 'Delete'
    }
];

for (item of authorCrud) {
    form.innerHTML += `
        <fieldset>
            <legend>${item.title}</legend>
            <input 
                type='text'
                id='addUserFirstName'
                name='addUserFirstName' 
                placeholder='First Name' />
            <input 
                type='text'
                id='addUserLastName'
                name='addUserLastName' 
                placeholder='Last Name' />
            <input 
                type='email'
                id='addUserEmail'
                name='addUserEmail'
                placeholder='Emai' />
            <label>Date of Birth</label>
            <input 
                type='date'
                id='addDateOfBirth'
                name='addDateOfBirth' />
            <input 
                type='text'
                id='addUsername'
                name='addUsername'
                placeholder="Username" />
            <input 
                type='password'
                id='addPassword'
                name='addPassword' 
                placeholder='Password' />
            <input 
                type='password'
                id='confirmPassword'
                name='confirmPassword' 
                placeholder='Confirm Password' />
            <input 
                type='submit'
                value='${item.button}' />
        </fieldset>
    `;
}

