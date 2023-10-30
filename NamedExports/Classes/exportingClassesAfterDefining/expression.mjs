//we can export multiple classes after defining
class books {
  constructor(geography, economy) {
    this.geography = geography
    this.econonmy = economy
  }
}

class constituencies {
  constructor(mla, mp) {
    this.mla = mla
    this.mp = mp
  }
}

export {books, constituencies}
