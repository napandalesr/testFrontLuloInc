import { postReserva } from ".";
import { BookingDto } from "./dto";

describe("Pruebas api habitación", () => {
  test("Debe guardar una habitación", async () => {
    const booking: BookingDto = {
      codigo: [1,2],
      nombre: "Neider"
    };
    const { status} = await postReserva(booking);
    expect(status).toEqual(200);
  });
});
