// tabla.js

import { obtenerUsuarios } from './api.js';

export async function crearTabla() {
  const usuarios = await obtenerUsuarios();

  const tabla = document.createElement('table');
  tabla.className = 'table table-striped';

  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  ['Nombre', 'Email', 'Dirección'].forEach(texto => {
    const th = document.createElement('th');
    th.textContent = texto;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  tabla.appendChild(thead);

  const tbody = document.createElement('tbody');
  usuarios.forEach(usuario => {
    const trBody = document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = usuario.name;
    trBody.appendChild(tdNombre);

    const tdEmail = document.createElement('td');
    tdEmail.textContent = usuario.email;
    trBody.appendChild(tdEmail);

    const tdDireccion = document.createElement('td');
    tdDireccion.textContent = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
    trBody.appendChild(tdDireccion);

    tbody.appendChild(trBody);
  });
  tabla.appendChild(tbody);

  return tabla;
}
