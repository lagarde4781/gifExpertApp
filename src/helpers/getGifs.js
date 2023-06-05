export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=uJlcpS3g7Ba7H86Wg1I1dKNbi4f9uz8z&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data = [] } = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
}  
