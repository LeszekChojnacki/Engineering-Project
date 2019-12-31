export async function fetchAPI(option, searchedPhrase) {

    var url = ''
    
    switch(option) {
        case 1:
            url = 'http://localhost:5000/api/counties/'+searchedPhrase
            break
        case 2:
            url = 'http://localhost:5000/api/communes/'+searchedPhrase
            break
        default:
            url = 'http://localhost:5000/api/provinces/'+searchedPhrase
            break
    }

    var h = new Headers()
    h.append('Authorization','Bearer '.concat(process.env.REACT_APP_SEVER_TOKEN))

    var req =  new Request(url,{
        method:'GET',
        headers: h
    })

    //console.log(req)

    var DbData = await fetch(req).then((res)=>{
        if(res){
            return res.json()
        }else{
            throw new Error('BAD REQUEST')
        }
    }).then((data)=>{
        return data
    }).catch(error => console.log('Authorization failed : ' + error.message))

    return DbData
}