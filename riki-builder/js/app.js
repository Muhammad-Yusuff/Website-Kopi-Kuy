var page = window.location.pathname.split('/')
page = page[page.length - 1]

var nav = document.querySelector('a[href="' + page + '"]')
if (nav) {
  nav.classList.add('active')
}

var btnadd = `<button class="btn btn-primary btn-copy">Copy</button>`;

function copyBlock(element) {
  alert(element)
}

document.querySelectorAll(".riki-block:not(.nocopy)").forEach(el => {
  let htmlcontent = el.innerHTML
  let htmlcontent2 = el.outerHTML
  //htmlcontent += `<div contenteditable="true" class="copy-textarea"><section class="riki-block">${htmlcontent}</section></div>${btnadd}`
  htmlcontent += `<div contenteditable="true" class="copy-textarea">${htmlcontent2}</div>${btnadd}`
  el.innerHTML = htmlcontent
})

document.querySelectorAll(".bisadicopy").forEach(el => {
  let htmlcontent = el.innerHTML
  let htmlcontent2 = el.outerHTML
  //htmlcontent += `<div contenteditable="true" class="copy-textarea"><section class="riki-block">${htmlcontent}</section></div>${btnadd}`
  htmlcontent += `<div contenteditable="true" class="copy-textarea">${htmlcontent2}</div>${btnadd}`
  el.innerHTML = htmlcontent
})

document.querySelectorAll(".btn-copy").forEach(el => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.previousSibling.innerHTML).then(
      () => {
        Swal.fire('Ok','Kode sudah di copy, silahkan paste','success')
      },
      () => {
        Swal.fire('maaf','Terjadi kesalahan, harap copy manual','error');
      }
    );
    //el.previousSibling.select()
    //document.execCommand('copy')
    //alert("silahkan paste pada code editor")
  })
})

function kopi() {
  navigator.clipboard.writeText(document.querySelector("#css-copy").value).then(
    () => {
      Swal.fire('Ok','Kode sudah di copy, silahkan paste','success')
    },
    () => {
      Swal.fire('maaf','Terjadi kesalahan, harap copy manual','error');
    }
  );
}
