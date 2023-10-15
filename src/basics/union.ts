type person = {
    name: string
}
type gender = person | {
    gender: string
}
type details = gender



const personDetails = (details: details) => {
    console.log(details)

}


personDetails({name:"sami",gender:"male"})