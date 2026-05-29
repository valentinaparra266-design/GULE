function mostrar() {

    // PRODUCTO 1
    let prod1 = document.getElementById("prod1");
    let precio1 = parseFloat(prod1.value) || 0;
    let cantidad1 = parseFloat(document.getElementById("cant1").value) || 0;
    let total1 = precio1 * cantidad1;

    document.getElementById("valor1").value = precio1;
    document.getElementById("total1").value = total1.toFixed(0);


    // PRODUCTO 2
    let prod2 = document.getElementById("prod2");
    let precio2 = parseFloat(prod2.value) || 0;
    let cantidad2 = parseFloat(document.getElementById("cant2").value) || 0;
    let total2 = precio2 * cantidad2;

    document.getElementById("valor2").value = precio2;
    document.getElementById("total2").value = total2.toFixed(0);


    // PRODUCTO 3
    let prod3 = document.getElementById("prod3");
    let precio3 = parseFloat(prod3.value) || 0;
    let cantidad3 = parseFloat(document.getElementById("cant3").value) || 0;
    let total3 = precio3 * cantidad3;

    document.getElementById("valor3").value = precio3;
    document.getElementById("total3").value = total3.toFixed(0);


    // CALCULAR ADICIONALES
    let adicionales = 0;

    if(document.getElementById("adic1").checked){
        adicionales += 3000;
    }

    if(document.getElementById("adic2").checked){
        adicionales += 2500;
    }

    if(document.getElementById("adic3").checked){
        adicionales += 4000;
    }


    // SUBTOTAL
    let subtotal = total1 + total2 + total3 + adicionales;
    document.getElementById("subtotal").value = subtotal.toFixed(0);


    // IVA
    let iva = subtotal * 0.19;
    document.getElementById("iva").value = iva.toFixed(0);


    // TOTAL NETO
    let neto = subtotal + iva;
    document.getElementById("neto").value = neto.toFixed(0);
}
// GENERAR PEDIDO
function enviar() {

    let cliente = document.getElementById("cliente").value;

    if(cliente === ""){
        alert("Por favor ingresa el nombre del cliente");
        return;
    }

    let pago = "";

    if(document.getElementById("nequi").checked){
        pago = "Nequi";
    }
    else if(document.getElementById("daviplata").checked){
        pago = "Daviplata";
    }
    else if(document.getElementById("efectivo").checked){
        pago = "Efectivo";
    }

    alert("Pedido generado correctamente ✅\nPago seleccionado: " + pago);
}