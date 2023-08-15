import Dexie from "dexie";

export const db = new Dexie("GuiaTelefonica");

db.version(1).stores({
    contactos:  "++, nombre, &telefono"
});


// db.contactos.toCollection().count(function (count) {
//     if(count === 0) db.contactos.add({ nombre: "Juan", telefono: "123456789" });
//     console.log(count + " contacto en total");
// });

export const edit = (contacto) => {
    db.contactos.update(contacto,id, contacto);

}

export const add = (contacto) => {
    db.contactos.add(contacto);

}
export const remove = (id) => {
    db.contactos.delete(id);
  
}
export const getAll = async () => {
    return db.contactos.toArray();
}