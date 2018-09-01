import axios from 'axios';

class Service {
  getCity(city) {
    return axios.get(
      'https://thenextdive.com/JSON/json.city.php?q=' + city,
      {}
    );
  }
  getCentersByCity(id) {
    return axios.get(
      'https://thenextdive.com/JSON/json.centersByCity.php?idCity=' + id
    );
  }
  getCenter(id) {
    return axios.get(
      'https://thenextdive.com/JSON/json.centerInfo.php?idCenter=' + id
    );
  }
  sendMessage(idCenter, fullName, email, message) {
    return axios.post(
      'https://thenextdive.com/JSON/json.centerMail.php',
      'idCenter=' +
        idCenter +
        '&fullName=' +
        fullName +
        '&email=' +
        email +
        '&message=' +
        message
    );
  }
  getBasicCenter(idCenter, key) {
    return axios.get(
      'https://thenextdive.com/JSON/json.centerBasic.php?id=' +
        idCenter +
        '&key=' +
        key
    );
  }
  addImage(idCenter, key, image) {
    let data = new FormData();
    data.append('id', idCenter);
    data.append('key', key);
    data.append('file', image);
    return axios.post(
      'https://thenextdive.com/JSON/json.centerLogo.php',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
  addCenter(
    id,
    extSource,
    extId,
    name,
    email,
    phone,
    web,
    image,
    addrStreet,
    addrNumber,
    addrOffice,
    addrCity,
    addrState,
    addrCountry,
    tripAdvisor,
    confirm,
    key,
    latitude,
    longitude
  ) {
    return axios.post(
      'https://thenextdive.com/JSON/json.centerBasicSave.php',
      'id=' +
        id +
        '&extSource=' +
        extSource +
        '&extId=' +
        extId +
        '&name=' +
        name +
        '&email=' +
        email +
        '&phone=' +
        phone +
        '&web=' +
        web +
        '&image=' +
        image +
        '&addrStreet=' +
        addrStreet +
        '&addrNumber=' +
        addrNumber +
        '&addrOffice=' +
        addrOffice +
        '&addrCity=' +
        addrCity +
        '&addrState=' +
        addrState +
        '&addrCountry=' +
        addrCountry +
        '&tripAdvisor=' +
        tripAdvisor +
        '&confirm=' +
        confirm +
        '&key=' +
        key +
        '&latitude=' +
        latitude +
        '&longitude=' +
        longitude
    );
  }
}

export default new Service();
