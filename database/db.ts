import mongoose from "mongoose";

/**
 *  0 = disconnected
 *  1 = connected
 *  2 = connecting
 *  3 = disconnecting
 */

const mongooConnection = {
    isConnected: 0
}

export const connect = async () => {

    if ( mongooConnection.isConnected ) {
        console.log('Ya existe una conexion');
        return;
    }

    if ( mongoose.connections.length > 0 ) {
        
        mongooConnection.isConnected = mongoose.connections[0].readyState;

        if( mongooConnection.isConnected === 1 ) {
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_URL || '' );
    mongooConnection.isConnected = 1;
    console.log('Conectado a MongoDb:', process.env.MONGO_URL);
}

export const disconnect = async() => {

    if ( mongooConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongooConnection.isConnected = 0;

    console.log('Desconectado de MongoDb.');
}