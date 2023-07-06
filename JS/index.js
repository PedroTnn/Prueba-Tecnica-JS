// index.js

import { crearTabla } from './tabla.js';
import { buscar } from './busqueda.js';

document.addEventListener('DOMContentLoaded', async () => {
  const tabla = await crearTabla();
  document.getElementById('user-table').appendChild(tabla);

  const inputBusqueda = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    inputBusqueda.classList.toggle('d-none');
  });

  inputBusqueda.addEventListener('input', () => buscar(tabla, inputBusqueda.value));
});

