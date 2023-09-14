export async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      
      if (!response.ok) {
        throw new Error('La solicitud no pudo completarse correctamente.');
      }
      
      const data = await response.json();
      
      // El resultado final es un array con los datos de todos los países
      const countriesArray = Array.isArray(data) ? data : [];
      
      return countriesArray;
    } catch (error) {
      throw new Error('Error al obtener los países: ' + error.message);
    }
}
