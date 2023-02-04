 export const generatorOrder =({
    nombre ="",
    email ="",
    telefono ="",
    cart = [],
    cantidad = 0,
    total = 0
}) =>{
    return{
        comprador:{
            nombre:nombre,
            email:email,
            telefono:telefono,
        },
        item:{
            cart: cart,
           
        },
        
        total:total,
        creacion: new Date().toLocaleString()
    }
}
