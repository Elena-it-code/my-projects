function updateLight(current) {
    if (current === 'green'){
        return 'yellow';
    } if (current === 'yellow'){
        return 'red';
    } if (current === 'red'){
        return 'green';
    };
}

function doubleInteger(i) {
    i= i*2;
    return i;
}