onload = () => {
const upload = document.getElementById('upload');
const fileInput = document.getElementById("fileInput");
const spaceLeft = document.getElementById("spaceLeft");
const spaceUsed = document.getElementById("spaceUsed");
const loadingWidth = document.getElementById("loadingWidth");
upload.addEventListener("click", fileInputClick);
fileInput.addEventListener("change", fileUpload);
}

function fileInputClick() {
    fileInput.click();
    console.log('fileInput was clicked')
};

function fileUpload() {
    const fileReader = new FileReader(); // initialize the object  
    for(let fileIndex = 0; fileIndex < fileInput.files.length; fileIndex++ ){
    fileReader.readAsArrayBuffer(fileInput.files[fileIndex]);
    // read file as array buffer
    fileReader.onload = async(event) => {
        

        const content = event.target.result;
        const CHUNK_SIZE = 1024*1024;
        const totalChunks = content.byteLength / CHUNK_SIZE;
        if (totalChunks < 10){
        console.log(totalChunks)
        spaceUsed.innerHTML= Math.round(( totalChunks + Number.EPSILON) * 100) / 100 + " MB";
        spaceLeft.innerHTML= Math.round(((10 - totalChunks) + Number.EPSILON) * 100) / 100;
        let id = null;
        let width=0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {if (width > totalChunks/.1)
        {clearInterval(id);}
        else {
            width++;
            loadingWidth.style.width= width + "%";
        }
        }
        
        loadingWidth.style.width = 30 + "%";
        }
        else
        {alert('file exceeds maximum storage space')
        }}
        

        // // Generate filename
        // const fileName = Math.random().toString(36).slice(-6) + fileInput.files[0].name;

        // for (let chunk = 0; chunk < totalChunks + 1; chunk++){
        //     let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)
        
        // await fetch("/upload?fileName=" + fileName, {
        //     'method' : 'POST',
        //     'headers' : {
        //         'content-type' : "application/octet-stream",
        //         'content-length' : CHUNK.length,
        //     },
        //     'body' : CHUNK
        // })}
       
    }
};