var btnSubmit = document.querySelector('.submit input');

btnSubmit.onclick = () => {
    var inputs = document.querySelectorAll('.inputBox input');
    var cnt = 0;
    for (inp of inputs) {
      if(inp.value.length !== 0) {
        cnt++;
      }
    }
    if(cnt < 5) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter full information',
      })
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "Your request will be send to the support team !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, send it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Successfully',
            'Your request has been sent!',
            'success',
            setTimeout(() => {
                window.location.assign('https://thdshop.github.io/')
            }, 3000)
          )
        } 
      })
    }
}
