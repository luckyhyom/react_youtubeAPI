class Youtube {

    constructor(httpClient){
        this.youtube = httpClient;
        }
    

    async mostPopular(){
        const response = await this.youtube.get('search',{
            params: {
                q:'yerinB',
                part:'snippet',
                maxResults:25,
                type:'video',
                chart: 'mostPopular',
            },
        })
        return response.data.items;
    }

    async search(name){
        const response = await this.youtube.get('search',{
            params: {
                q:name,
                part:'snippet',
                maxResults:25,
                type:'video'
            },
        })
        return response.data.items;
    }


}



export default Youtube;