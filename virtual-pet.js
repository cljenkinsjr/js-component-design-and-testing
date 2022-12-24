class VirtualPet {
  constructor(name, description, hunger, thirst) {
    this.name = name;
    this.description = description;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  name() {
    return this.name;
  }

  description() {
    return this.description;
  }

  feed() {
    this.hunger -= 5;
  }

  water() {
    this.thirst += 10;
  }
}

export default VirtualPet;
