export const imbdOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": '5f265a6c83msh7c827d348473bbep1297f1jsn1a49dffa8f32',
        "X-RapidAPI-Host": 'imdb-top-100-movies.p.rapidapi.com',
    },
};

export const fetchData = async (url, imbdOptions) => {
    const response = await fetch(url, imbdOptions);
    const data = await response.json();
    
    return data;
}