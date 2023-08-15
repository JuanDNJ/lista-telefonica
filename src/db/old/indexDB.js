const contactos = [
    { nombre: "Juan Antonio", telefono: "654 698 256" },
    { nombre: "Francisco Javier", telefono: "657 289 581" },
    { nombre: "Santiago", telefono: "289 657 216" },
];
const indexDB = () => {
    try {

        if (!globalThis.indexedDB) throw new Error("Tu navegador no soporta indexDB")

        const req = globalThis.indexedDB.open("lista-telefonica", 3)

        req.onerror = function (event) {
            throw new Error(event.target.errorCode)
        }
        req.onsuccess = function (event) {
            console.log('success: ', event.target.result)
        }
        req.onupgradeneeded = function (event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore("contactos", { autoIncrement: true });

            objectStore.createIndex("nombre", "nombre", { unique: false });
            objectStore.createIndex("telefono", "telefono", { unique: true });
            
            objectStore.transaction.oncomplete = function (event) {

                const customerObjectStore = db.transaction(["contactos"], "readwrite").objectStore("contactos");

                contactos.forEach((contacto) => {
                    customerObjectStore.add(contacto)
                })
            }
           
        }
     
        return req;


    } catch (error) {
        throw new Error(error.message)
    }
};
const addContacto = (contacto) => {
    const req = indexDB()
 
 
    req.onsuccess = function (data) {
        // console.log(data.target.result)
        const transaction = data.target.result.transaction(["contactos"], "readwrite");
        const objectStore = transaction.objectStore("contactos");
        // console.log(objectStore)

        transaction.oncomplete = function (event) {
            console.log(`Transacción completada`);
        }
        transaction.onerror = (event) => {
            const { message, code, name } = event.srcElement.error
            console.log(message, name, code);
        };

        const resultado = objectStore.add(contacto);

        resultado.onsuccess = function (event) {
            const id = event.target.result;
            console.log(`Contacto añadido correctamente ${id}`);
        }
        objectStore.onerror = function (event) {
            console.log("Error añadiendo el contacto", event);
        }

    }
}
const getContactos = (callback) => {
    const req = indexDB()
    let contactos = []
    req.onsuccess = function (data) {

        const transaction = data.target.result.transaction(["contactos"], "readonly");
        const objectStore = transaction.objectStore("contactos");

        objectStore.getAll().onsuccess = function (data) {
            // console.log(data.target.result)
            callback(data.target.result)
        }
    }

}
export {
    indexDB,
    contactos,
    addContacto,
    getContactos
}