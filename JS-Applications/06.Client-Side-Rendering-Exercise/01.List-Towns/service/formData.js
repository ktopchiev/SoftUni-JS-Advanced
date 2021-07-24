const getData = (form) => {
    let formData = new FormData(form);
    let towns = formData.get('towns');
    return towns.split(', ');
}

export { getData }