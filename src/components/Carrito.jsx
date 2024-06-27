import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => {
        return (
          <Fragment key={prod.id}>
            <div className='productList'>
              <h1>{prod.nombre}: ${prod.precio}</h1>
              <button onClick={() => { eliminarProducto(prod) }}>✖️</button>
            </div>

          </Fragment>
        )

      })}
      {
        carrito.length > 0 ?
          <div className='totalProducts'>
            <h2>Total: ${calcularTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to="/finalizar-compra">Finalizar compra</Link>
          </div> :
          <h2>Su carrito esta vacio</h2>
      }
    </div>
  )
}

export default Carrito