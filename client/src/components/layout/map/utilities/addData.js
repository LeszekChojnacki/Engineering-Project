import {fetchAPI} from './fetchAPI'

export async function addData(data, mapType, searchedPhrase) {

    var tmpData = data 
    await fetchAPI(mapType, searchedPhrase)
    .then((fetchData)=>{

        try{
            if(Object.keys(tmpData.features).length>380){

                tmpData.features.forEach(element => {
      
                    element.properties["POPULATION"] = 0
                    element.properties["searchedPhrase"] = searchedPhrase

                    fetchData.every((data) =>{
 
                        if(element.properties.JPT_KOD_JE === data.TERYT) {

                            element.properties["POPULATION"] = data.LICZBA
                            return false
                        }
                        return true

                    })  

                })
                return
 
            }else{
      
                tmpData.features.forEach(element => {
                
                    element.properties["POPULATION"] = 0
                    element.properties["searchedPhrase"] = searchedPhrase

                    fetchData.every(data =>{
      
                        if(element.properties.JPT_NAZWA_.toUpperCase() === data._id) {
                            
                            element.properties["POPULATION"] = data.count
                            return false
                        }
                        return true
                    })

                })
                return
                
            }
        }catch(e){
            console.error(e)
        }
    })

    return tmpData;
}