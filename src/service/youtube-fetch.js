class YoutubeFetch {

    constructor(key){
        this.key = key;

        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
    }

    async mostPopular(){
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=yerinB&key=${this.key}&type=video`, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(name){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=${this.key}`, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }


}

export default YoutubeFetch;