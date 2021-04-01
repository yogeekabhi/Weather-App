class Weather {
  constructor(city) {
    this.apiKey = '7083812dfb75376083bac931d80d6626';
    this.city = city;
    
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`    
      );
      
    const responseData = await response.json();

    return responseData;
  }

  //Change Weather location
  changeLocation(city,) {
    this.city = city;
    
  }
}
