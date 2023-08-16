let btn = document.getElementById("button");
  //  js for sticky nav bar starts
  window.onscroll = function () { myFunction() };
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    if (document.documentElement.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  }
  // js ends for sticky nava bar

  // js for responsive menu bar starts
  function openNav() {
    var menuItem = document.getElementById("toogle-menu-lists");
    if (menuItem.style.display === "none") {
      menuItem.style.display = "block";
    } else {
      menuItem.style.display = "none";
    }
  }
  // js ends for responsive nvabar

  // read more button js starts
  function readmoreButton() {
    var readmoreBtn = document.getElementById("readmore-btn");
    var readmoreContent = document.getElementById("myContent");
    if (readmoreBtn.innerText === 'Read More') {
      readmoreBtn.innerText = 'Read Less'
      readmoreContent.style.display = "block";

    } else {
      readmoreBtn.innerText = 'Read More'
      readmoreContent.style.display = "none";


    }

  }