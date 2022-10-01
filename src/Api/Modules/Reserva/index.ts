import { IResponse } from './../../../interface/IResponse';
import { httpClient } from '../..';
import { BookingDto } from './dto';

const postReserva = async (data: BookingDto): Promise<IResponse> => {
  return await httpClient().post("http://localhost:3000/booking", data);
};

export {
  postReserva
};
