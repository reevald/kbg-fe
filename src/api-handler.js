import axios from 'axios';

const displayLoaders = (boolStatus) => {
  const loaders = document.querySelectorAll(".loader");
  loaders.forEach((elemLoader) => {
    elemLoader.style.display = boolStatus ? "flex" : "none";
  });
}

const sendDataToPredict = async (imgBase64, elemListPredict) => {
  displayLoaders(true);
  const formData = new FormData();
  console.log(imgBase64);
  formData.append('imgBase64', imgBase64.replace(/^data:image\/[a-z]+;base64,/, ""));
  try {
    const response = await axios({
      method: 'post',
      url: 'https://kbg-api.azurewebsites.net/classifier',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    });

    const dataPrediksi = response.data.map((objPredict, idx) => {
      return {
        ...objPredict,
        confidence: parseFloat(objPredict["confidence"]),
        id: idx
      }
    });

    elemListPredict.dataPredicts = dataPrediksi;
    displayLoaders(false);
    return dataPrediksi;
  } catch (msgError) {
    elemListPredict.renderError(msgError);
    console.error(msgError);
    return msgError;
  }
}

export default sendDataToPredict;