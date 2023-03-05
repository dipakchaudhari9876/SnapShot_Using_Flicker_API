import axios from 'axios'

const API_KEY = process.env.REACT_APP_FLICKER_KEY
const FetchData = (text)=>{

    const fetchImgUrl = ({ farm, server, id, secret }, size) => {
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}`
        if (size) {
          url += `_${size}`
        }
        url += `.jpg`
        return { url, id }
      }
  
  
      const FlickerData = async () => {
        const params = {
          method: "flickr.photos.search",
          api_key: API_KEY,
          text: text,
          per_page: 20,
          license: '4',
          format: 'json',
          nojsoncallback: 1
        }
        const parameter = new URLSearchParams(params)
  
        const url = `https://www.flickr.com/services/rest/?${parameter}`
  
        let arr;
        await axios.get(url).then((resp) => {
          const temp = resp.data.photos.photo
          // console.log(temp)
          arr = temp.map((data) => {
            return fetchImgUrl({ ...data }, 'q')
          })
        })
        return arr
      }
      return FlickerData()
  
}

export {
    FetchData,
}