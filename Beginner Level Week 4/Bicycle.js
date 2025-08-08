import { Vehicle } from './Vehicle.js';

export class Bicycle extends Vehicle {
  constructor(color = "blue") {
    super(color, 2, "honk honk");
  }
}
