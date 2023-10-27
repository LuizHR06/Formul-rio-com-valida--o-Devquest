const inputs = document.querySelectorAll('.input')
const requiredText = document.querySelectorAll('.required-input')

inputs.forEach(itemInput => {
    itemInput.addEventListener('change', () => {
        
        if(itemInput.value.length === 0 || itemInput.value === '' || itemInput.value === null) {

            itemInput.classList.add('selected-red')

            requiredText.forEach(item => {
                if(itemInput.classList.contains('selected-red')) {
                    item.classList.add('show')
                    item.classList.remove('hide')
                }
            })
            
        } else if (itemInput.value.length > 3) {

            itemInput.classList.add('selected')
            itemInput.classList.remove('selected-red')

            requiredText.forEach(item => {
                if(itemInput.classList.contains('selected')) {
                    item.classList.remove('show')
                    item.classList.add('hide')
                }
            })
        }
    })
})

