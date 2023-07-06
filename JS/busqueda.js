// busqueda.js

export function buscar(tabla, termino) {
    const filas = Array.from(tabla.querySelectorAll('tbody tr'));
    filas.forEach(fila => {
      const [nombre, email] = fila.querySelectorAll('td');
      const coincide = nombre.textContent.toLowerCase().includes(termino.toLowerCase()) ||
                       email.textContent.toLowerCase().includes(termino.toLowerCase());
      fila.style.display = coincide ? '' : 'none';
    });
  }
  