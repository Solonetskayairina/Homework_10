    let length;
    let inputArray = [];
    let elementArray;

    do {
        length = prompt('Enter the length of the array:');

        if (length === null) {
            alert('It\'s a pity that you didn\'t want to enter the length of the array.');
            break;
        }
    } while (isNaN(length) || length < 0);

    if (length !== null) {
        do {
            elementArray = prompt(`Enter next element of the array:`);

            if (elementArray === null) {
                alert('It\'s a pity that you didn\'t want to enter an element.');
                break;
            }
            inputArray.push(elementArray);
        } while ( isNaN(elementArray) || inputArray.length < length );
        inputArray.length > 0 ? `Your array: [${inputArray.join(', ')}]` : '';
    }

    if (inputArray.length > 0) {
        let sorted = inputArray.toSorted((a, b) => a - b);
        alert( `Array by growth : ${sorted}`);

        inputArray.splice(2, 4);
        alert(`The result after removing elements from the array from 2 to 4 (inclusive!) : ${inputArray}`);
    } else{
        alert('No elements')
    }