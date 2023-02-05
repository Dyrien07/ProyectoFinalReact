import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { generatorOrder } from "../../data/generatorOrder";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Shop } from "../../context/ShopProvider";
import { doc, updateDoc } from "firebase/firestore";

const FormCompra = () => {
    const { productos, totalCompra, limpiarCarrito } = useContext(Shop);

    async function GenerarOrden(data, event) {
        
        const order = generatorOrder({
            nombre: data.Nombre,
            email: data.email,
            telefono: data.Telefono,
            cart: productos,
            total: totalCompra(),
        });
        let docRef = await addDoc(collection(db, "Orders"), order);
        toast.success(docRef.id);
        for (const ProductosCarrito of productos) {
            const productoRef = doc(db, "Productos", ProductosCarrito.id);

            await updateDoc(productoRef, {Stock: ProductosCarrito.Stock - ProductosCarrito.quantity});
        }
       
        limpiarCarrito();
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        GenerarOrden(data);
    };

    return (
        <>
            <Toaster></Toaster>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input
                    {...register("Nombre", {
                        required: true,
                        minLength: 1,
                    })}
                />
                {errors?.Nombre?.type === "required" && (
                    <p>Campo Obligatorio</p>
                )}
                {errors?.Nombre?.type === "minLength" && (
                    <p>Debe ser mayor a 1 caracter </p>
                )}
                <label>Email</label>
                <input
                    type={"email"}
                    {...register("email", { minLength: 3, required: true })}
                />
                {errors?.email?.type === "required" && <p>Campo Obligatorio</p>}
                {errors?.email?.type === "minLength" && (
                    <p>Debe ser mayor a 3 caracteres </p>
                )}
                <label>Telefono</label>
                <input
                    type={"tel"}
                    {...register("Telefono", {
                        minLength: 10,
                        maxLength: 10,
                        required: true,
                    })}
                />
                {errors?.Telefono?.type === "minLength" && (
                    <p>Debe de tener 10 digitos</p>
                )}
                <input onClick={GenerarOrden} type="submit" />
            </form>
        </>
    );
};

export default FormCompra;
