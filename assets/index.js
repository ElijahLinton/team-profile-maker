const {  inquirer } = require("inquirer")
const fs = require('fs')
 

const signUp = () =>{
    return  inquirer.prompt({

    
    name: '',
    type:'',
    message:'',
})
}

const generatePage = require('./generatepage')
const  {writeFile} = data =>{
    fs.writeFile('index.html',data,err => {
        if(err){
            console.log(err)
        }
    })
}
const init  =  () => {
    signUp()
    .then(answers => generatePage(answers))
    .then((data) => writeFile(data));
}
init()