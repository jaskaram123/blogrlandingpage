var value = document.getElementsByClassName('joinin')
Array.from(value).forEach(function (element) {
  element.addEventListener('click', function () {
    var formtype = element.innerHTML
    var editform = document.getElementById('typeofform')
    editform.innerHTML = `${formtype}`
    document.getElementById('formsign').innerHTML = `${formtype}`
    document.body.classList.add('openlogin')
    document.body.style.overflow = 'hidden'
    document.getElementById('closebtn').addEventListener('click', function () {
      document.body.classList.remove('openlogin')
      document.body.style.overflow = 'visible'
    })
  })
})
document.getElementById('startforfree').addEventListener('click', function () {
    var editform = document.getElementById('typeofform')
    editform.innerHTML = 'Sign Up'
    document.getElementById('formsign').innerHTML ='Sign up'
    document.body.classList.add('openlogin')
    document.body.style.overflow = 'hidden'
    document.getElementById('closebtn').addEventListener('click', function () {
      document.body.classList.remove('openlogin')
      document.body.style.overflow = 'visible'
    })
})

var learn = document.getElementById('learnmore')
learn.addEventListener('click', function () {
    window.scrollTo({
        top: 603.2000122070312,
        behavior: 'smooth'
    })
})
document.getElementById('scroll').addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
