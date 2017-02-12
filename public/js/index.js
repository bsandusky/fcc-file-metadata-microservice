(()=>{
    
    document.getElementById("fileUpload").addEventListener("change", (event) => {
        console.log(event.target.files[0])
    })
    
})()