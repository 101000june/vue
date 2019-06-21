let _products

// _products = [
  // {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
  // {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
  // {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
// ]

export default {
  getProducts (cb) {
    const axios = require('axios')

    axios.get('https://swapi.co/api/films', {
      crossDomain: true
    }).then(res => {
      _products = res.data.results
      // _products.forEach((p) => {
      //   let segments = p.url.split('/')
      //   let lastSegment = segments.pop() || segments.pop()
      //   p.id = lastSegment
      // })
      console.log(_products)
      setTimeout(() => cb(_products), 100)
    }).catch(error => {
      console.log('error', error)
      setTimeout(() => cb([]), 100)
    })
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
