
// code mẫu do con bot nó code để tạo nhiều giá trị
const invoiceModal = document.getElementById('invoiceModal');
invoiceModal.addEventListener('show.bs.modal', event => {
    name = $('#getDataAccount').attr('data-name');
    email = $('#getDataAccount').attr('data-email');
    SDT = $('#getDataAccount').attr('data-SDT');


    $('#nameEm').val(name);
    $('#SDTEm').val(SDT);
    $('#emailEm').val(email);
})

$('#addInvoice').click(async function (e) {
    e.preventDefault();

    //get data of Client
    const nameC = $('#InameC').val();
    const emailC = $('#IemailC').val();
    const SDTC = $('#ISDTC').val();
    const addressC = $('#IaddressC').val();
    const BHYTC = $('#IBHYTC').val();
    const genderC = $('#IgenderC').val();

    // get data of Employee
    const nameE = $('#nameEm').val();
    const emailE = $('#emailEm').val();
    const SDTE = $('#SDTEm').val();

    if (!validation(nameC, emailC, SDTC, addressC, genderC)) return;


    var radioValue = $("input[name='services']:checked").val();

    if (radioValue == undefined) return $('.notification').html("Vui lòng chọn ít nhất 1 dịch vụ!");

    // get data Of Service
    let allService = await fetch("/admin/getAPI/services");
    allService = await allService.json();

    // filter services used by Client
    let servicesIsUsed = allService.filter(element => radioValue.includes(element._id));

    // filter name and price of servicesIsUsed
    servicesIsUsed = servicesIsUsed.map(obj => ({ serviceName: obj.serviceName, price: obj.price }));

    const dataSending = {
        client: {
            name: nameC,
            email: emailC,
            SDT: SDTC,
            address: addressC,
            BHYT: BHYTC,
            gender: genderC,
        },
        employee: {
            name: nameE,
            email: emailE,
            SDT: SDTE,
        },
        status: false,
        dateOfCreation: new Date(),
        service: servicesIsUsed,
    }

    eventPOST(dataSending, "/employee/add/invoice", "invoiceModal", "Tạo mới thành công!");
});