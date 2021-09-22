// Global Variables
let [form] = document.getElementsByTagName('form')
let authorCrud = [
    {
        title: 'Add Book',
        button: 'Add'
    },
    {
        title: 'Edit Book',
        button: 'Edit'
    },
    {
        title: 'Delete Book',
        button: 'Delete'
    }
];

for (item of authorCrud) {
    form.innerHTML += `
        <fieldset>
            <legend>${item.title}</legend>
            <input 
                type='text'
                id='addBookTitle'
                name='addBookTitle' 
                placeholder='Book Title' />
            <input 
                type='text'
                id='addOriginalTitle'
                name='addOriginalTitle'
                placeholder='Original Title' />
            <label>Year of Publication</label>
            <input 
                type='date'
                id='addYearOfPublication'
                name='addYearOfPublication' />
            <input 
                type='text'
                id='addGenre'
                name='addGenre' 
                placeholder='Genre' />
            <input 
                type='number'
                id='addMillionsSold'
                name='addMillionsSold' 
                placeholder='Millions Sold' />
            <input 
                type='text'
                id='addLanguageWritten'
                name='addLanguageWritten'
                placeholder='Language' />
            <input 
                type='submit'
                value='${item.button}' />
        </fieldset>
    `;
}

