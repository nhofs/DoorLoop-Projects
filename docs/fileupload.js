onload = () => {
const upload = document.getElementById('upload');
const fileInput = document.getElementById("fileInput");
upload.addEventListener("click", fileInputClick);
fileInput.addEventListener("change", fileUpload);
}

function fileInputClick() {
    fileInput.click();
    console.log('fileInput was clicked')
};

function fileUpload() {
    const fileReader = new FileReader(); // initialize the object  
    fileReader.readAsArrayBuffer(fileInput.files[0]); // read file as array buffer
    fileReader.onload = async(event) => {
        console.log("file read sucessful")

        // const content = event.target.result;
        // const CHUNK_SIZE = 1000;
        // const totalChunks = event.target.result.byteLength / CHUNK_SIZE;

        // // Generate filename
        // const fileName = Math.random().toString(36).slice(-6) + fileInput.files[0].name;

        // for (let chunk = 0; chunk < totalChunks + 1; chunk++){
        //     let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)
        // }
        // await fetch("/upload?fileName=" + fileName, {
        //     'method' : 'POST',
        //     'headers' : {
        //         'content-type' : "application/octet-stream",
        //         'content-length' : CHUNK.length,
        //     },
        //     'body' : CHUNK
        // })
    };
}