class Api {
  _defaultPath = 'http://api.dev.cakeiteasy.no/api/store'
  async getResource(url) {
    const result = await fetch(`${this._defaultPath}${url}`)
    if (!result.ok) {
      throw new Error(`recieved ${result.status} `)
    }
    return result.json()
  }
  handlerGetBakeries = () => {
    return this.getResource(`/bakeries/?country_code=no`)
  }
  handlerGetCities = () => {
    return this.getResource(`/cities/?country_code=no&most_popular=true`)
  }
}

const BakerService = new Api()

export default BakerService
