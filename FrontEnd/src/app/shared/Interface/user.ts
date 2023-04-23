export interface User {
    _id?: string,
    nombre: string,
    password?: string,
    apellido: string,
    email: string,
    rol: string,
    image: string,
    date?: Date,
}
