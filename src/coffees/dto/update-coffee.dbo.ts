import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

export class UpdateCoffeeDbo extends PartialType(CreateCoffeeDto) {
   
}
