import { postHabitacion } from ".";
import { RoomDto } from "./dto";

describe("Pruebas api habitación", () => {
  test("Debe guardar una habitación", async () => {
    const room: RoomDto = {
      capacidad: 4,
      precio: "50.000",
      estado: "disponible"
    };
    const { status} = await postHabitacion(room);
    expect(status).toEqual(200);
  });
});
