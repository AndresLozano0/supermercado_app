


const { crearUsuario, leerUsuario, actualizarUsuario, eliminarUsuario} = require('./crud_usuario');

// ========== EJEMPLOS DE USO CRUD USUARIO ==========

// Crear un usuario
// crearUsuario(
//   'Pedro',                               //nombres
//   'Gómez',                               //apellidos
//   'M',                                   //sexo (puede ser 'M','F'. )
//   'C.C.',                                //tipoDocumento (puede ser 'C.C.', 'T.I.', 'PASAPORTE'.)
//   '1234567890',                          //numeroDocumento 
//   '1990-01-01',                          //fechaNacimiento
//   'pedro@example.com',                   //correo
//   '3101234567',                          //celular   
//   'Calle 123 #45-67',                    //direccion
//   6,                                     // idRol                        
//   'hashed_password_example',             //hashContraseña
//   '2025-04-26',                          // fechaCreación
//   'Activo'                               //estado (puede ser 'Activo', 'Inactivo'.)
// );

// Leer todos los usuarios
// leerUsuario();

// Actualizar usuario con ID 9
// actualizarUsuario(9, {
//   nombres: ' Antonio',
//   apellidos: ' Ruiz',
//   sexo: 'M',
//   tipoDocumento: 'C.C.',
//   numeroDocumento: '987654321',
//   fechaNacimiento: '1990-02-02',
//   correo: 'gomez@example.com',
//   celular: '3109876543',
//   direccion: 'Carrera 45 #67-89',
//   idRol: 7,
//   hashContraseña: 'new_hashed_password',
//   fechaCreación: '2025-04-26',
//   estado: 'Activo'
// });

// Eliminar usuario con ID 8
// eliminarUsuario(8);

// ========== FIN EJEMPLOS DE USO ==========

//node test_usuario.js