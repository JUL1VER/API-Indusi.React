export class GoRestService { 

    constructor() {
        this.MainApi ='https://gorest.co.in/public/v1/'
    }

    getUsers = async () =>  { 
        return await fetch (this.MainApi+'users').then((response) => response.json())
    }

    deleteInduses = async (id) => {
        await fetch (this.MainApi+'users/'+ id,{
            method: 'DELETE', 
            mode: 'cors', 
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 9817c0f62a87301261d5bc5bdf33b9ce5b2b80dd221d21bdecdce6d3232f95c3',
            }
        }).then((response) => console.log(response.json))
    }
}
