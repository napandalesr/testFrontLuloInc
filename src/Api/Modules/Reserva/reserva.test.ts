import { postReserva } from ".";
import { BookingDto } from "./dto";

describe("Pruebas api habitación", () => {
  test("Debe guardar una habitación", async () => {
    const booking: BookingDto = {
      codigo: [1, 2],
      nombre: "Neider",
      fechaIngreso: "2022-10-1",
      fechaSalida: "2022-10-2"
    };
    const { status } = await postReserva(booking);
    expect(status).toEqual(200);
  });
});
