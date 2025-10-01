export type AircraftInfoDto = {
    id: number;
    type: string;
    registration: string;
}

export const initialAircraftInfoDto: AircraftInfoDto = {
    id: 0,
    type: '',
    registration: ''
};