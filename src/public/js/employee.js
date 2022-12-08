Ivo_pre = document.getElementById("InvoicePre");
Ivo_next = document.getElementById("InvoiceNext");

$('#InvoiceTable1').removeClass("noneDisplay");

function updateTable(preTableID, curTableID, value) {
    $(preTableID).addClass("noneDisplay");
    $(curTableID).removeClass("noneDisplay");
    Ivo_pre.value = value;
}

$('.invoiceBtn').click(function (e) {
    e.preventDefault();
    let preTableID = `#InvoiceTable${Ivo_pre.value}`;
    let curTableID = `#InvoiceTable${this.value}`;
    updateTable(preTableID, curTableID, this.value);
});

$('#InvoicePre').click(function (e) {
    e.preventDefault();
    let preTableID = `#InvoiceTable${Ivo_pre.value}`;
    if (Ivo_pre.value == 1) {
        let curTableID = `#InvoiceTable${Ivo_next.value}`;
        updateTable(preTableID, curTableID, Ivo_next.value);
    }
    else {
        let curTableID = `#InvoiceTable${Ivo_pre.value - 1}`;
        updateTable(preTableID, curTableID, Ivo_pre.value - 1);
    }
});

$('#InvoiceNext').click(function (e) {
    e.preventDefault();
    let preTableID = `#InvoiceTable${Ivo_pre.value}`;
    if (Ivo_pre.value == Ivo_next.value) {
        let curTableID = `#InvoiceTable1`;
        updateTable(preTableID, curTableID, 1);
    }
    else {
        let curTableID = `#InvoiceTable${Ivo_pre.value + 1}`;
        updateTable(preTableID, curTableID, Ivo_pre.value + 1);
    }
});