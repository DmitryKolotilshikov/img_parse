const input = document.getElementById("file");
const imgContainer = document.getElementById("imgContainer");

input.addEventListener("change", async (e) => {
    const selectedFile = e.target.files;

    if (selectedFile.length > 0) {
        const [imageFile] = selectedFile;
        const isImageType = imageFile.type.startsWith("image");

        if (isImageType) {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                const srcData = fileReader.result;
                const img = new Image();
                img.src = srcData;
                img.alt = 'image preview'

                imgContainer.innerHTML = '';
                imgContainer.append(img);
            };

            fileReader.readAsDataURL(imageFile);
        }
    }
});
