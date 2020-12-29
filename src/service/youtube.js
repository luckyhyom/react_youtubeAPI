class Youtube {

    constructor(key){
        this.key = key;

        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
    }

    mostPopular(){
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=yerinB&key=${this.key}&type=video`, this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items);
    }

    search(name){
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=${this.key}`, this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items);
    }


}

export default Youtube;