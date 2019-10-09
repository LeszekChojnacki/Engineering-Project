export function addData(data) {
  
    try{
        data.features.forEach(element => {
            element.properties["POPULATION"] = Math.floor(Math.random() * 1000)
        })
    }catch(e){
        console.error(e)
    }
}