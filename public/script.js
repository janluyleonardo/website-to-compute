/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎 JLMC");
document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    console.log("nombre, comentario", nombre, comentario);

    const response = await fetch('/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, comentario })
    });

    if (response.ok) {
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
        cargarComentarios();
    }
});

async function cargarComentarios() {
    const response = await fetch('/comentarios');
    const comentarios = await response.json();
    const lista = document.getElementById('lista-comentarios');
    lista.innerHTML = comentarios.map(c =>
        `<div><strong>${c.nombre}:</strong> ${c.comentario}</div>`
    ).join('');
}

// Cargar comentarios al inicio
cargarComentarios();
