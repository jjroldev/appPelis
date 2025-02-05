export const fetchData = async (URL: string) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data
};