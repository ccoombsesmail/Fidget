export const fetchCategories = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/categories',
    })
}

export const fetchCategory = (name) => {
    return $.ajax({
        method: 'GET',
        url: `api/categories/${name}`,
    })
}