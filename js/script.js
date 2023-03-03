$("#pilih-kopi").on("change", function() {
    let nilai_dipilih = $(this).val()
    
    $.get(`https://rikikurnia.com/prakerja/api/produk/${nilai_dipilih}`).then(function (res){
        var isi_konten = ""

        res.data.forEach(item => {
            isi_konten += `
            <div class="produk-kopi col-md-3 mb-4">
                <div class="card">
                    <img src="${item.foto}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.nama}</h5>
                        <p class="card-text">${item.size}</p>
                        <p class="card-text">${item.harga}</p>
                        <a href="${item.link}" target="_blank" class="btn btn-primary btn-block"><i class="bi bi-cart me-2"></i> Beli</a>
                    </div>
                </div>
            </div>`
        });

        $("#produk-kopi-wrapper").html(isi_konten)
    })
})



/* Silahkan Coba sendiri dengan mengetik ulang kode di bawah sini */


/* Silahkan Coba sendiri dengan mengetik ulang kode di bawah sini */