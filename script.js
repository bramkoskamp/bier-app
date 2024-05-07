const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
const listEl = document.querySelector(".mdc-drawer .mdc-list");
const mainContentEl = document.querySelector(".main-content");
const drawerOpen = document.querySelector(".hamburger");
const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
const path = window.location.pathname;

listEl.addEventListener("click", (event) => {
  drawer.open = false;
});

drawerOpen.addEventListener("click", () => {
  drawer.open = true;
});

function resetTabs() {
  document.querySelectorAll(".mdc-tab").forEach((tab) => {
    tab.classList.remove("mdc-tab--active");
  });
  document.querySelectorAll(".mdc-tab-indicator").forEach((tab_indicator) => {
    tab_indicator.classList.remove("mdc-tab-indicator--active");
  });

  document.querySelectorAll(".mdc-image-list__item").forEach((li) => {
    li.style.display = "block";
  });
}

function displayBeer(btn_type) {
  document.querySelectorAll(".mdc-image-list__item").forEach((li) => {
    li.style.display = "none";
  });
  document.querySelectorAll("." + btn_type).forEach((li) => {
    li.style.display = "block";
  });
}
function close_details() {  
  $('.home').text("Home") 
  $('.sheet-out-of-view').css('margin-left', '-110%');
  $('body').css('overflow-y', 'scroll');
  history.pushState(null, "", path);  
}

$('li').on('click', function () {
  $('.sheet').css('height', 'auto')
  let img_url = $(this).children().attr('src')
  let title = $(this).children().attr('title');
  let url =$(location).attr("href") + "/"+title;
  let state = {page_id: 1, user_id: 5 };

  $('.img_details').attr('src', img_url)
  $('.sheet-out-of-view').css('margin-left', '0');
  $('body').css('overflow-y', 'hidden');
  $('.home').text(title);

  history.pushState(state, "", url);  
  
});

window.onpopstate = function() {
    close_details();
  };