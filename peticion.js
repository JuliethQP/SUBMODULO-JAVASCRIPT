// function nombreFuncion() {
// };

/*Arrow function
 const nombreFuncion = () => {}  
*/
function obtenerDatos() {
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            const resultados = data.results;
            const alives = resultados.filter(resultado => resultado.status === "Alive");
            console.log(alives)
            console.log(alives.slice(0, 3));
            const aliens = resultados.some(resultado => resultado.species === "Alien");
            console.log(aliens);
        })
};

obtenerDatos();