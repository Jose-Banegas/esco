
const keyCodes = () => {
    document.addEventListener('keydown', function (e) {
      console.log(
        'keyCodeDEP', e.which,
        'key', e.key,
        'code', e.code,
        'location', e.location
      );
    });
  };
  // keyCodes();

  const ul = document.querySelector('#ulparaprod');
  const buscarproducto = document.querySelector('#buscarproducto');
  const formSearch = document.querySelector('#formSearch');
  const inputBuscar = document.querySelector('#inputBuscar');
  const tableBody = document.querySelector('.tableBody');

  formSearch.addEventListener('submit', async function(event){
    event.preventDefault();
    const query_buscar = formSearch.elements.buscar.value;
    try {
      
      const res = await axios.post('/administrador/productos/buscar', {buscar: query_buscar }); 
      const productos = res.data;

      console.log(productos);  

      for (let producto of productos)
      console.log(producto);  

      // const td0 = document.createElement('td');
      // const td1 = document.createElement('td');

      // const td2 = document.createElement('td');

      // const td3 = document.createElement('td');

      // const td4 = document.createElement('td');

      // const tr = document.createElement('tr');

      // const ul = document.createElement('ul');
      // const li = document.createElement('li');
      // const li2 = document.createElement('li');
      // const accion1 = document.createElement('a');
      // const accion2 = document.createElement('a');

      // td1.textContent= producto.precioMinorista;
      // td0.textContent= producto.nombre;
      // td2.textContent= producto.marca;
      // td3.textContent= producto.cantidad;

      // tr.append(td0,td1,td2,td3)
      // tableBody.append(tr);



      // formSearch.elements.codigo.value = '';
      // inputBuscar.focus();
        } catch (error) {
      console.error(error);
    }
   
  })

  const agregarProducto = (producto)=>{
      const td0 = document.createElement('td');
      const td1 = document.createElement('td');

      const td2 = document.createElement('td');

      const td3 = document.createElement('td');

      const td4 = document.createElement('td');

      const tr = document.createElement('tr');

      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const li2 = document.createElement('li');
      const accion1 = document.createElement('a');
      const accion2 = document.createElement('a');

      td0.textContent= producto.precioMinorista;
      td1.textContent= producto.nombre;
      td2.textContent= producto.marca;
      td3.textContent= producto.cantidad;

      tr.append(td0,td1,td2,td3)
      tableBody.append(tr);
  
    }
  
