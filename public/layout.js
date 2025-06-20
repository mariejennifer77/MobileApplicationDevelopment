$(document).ready(function () {
  
  // Navbar & contact panel
  
  $(".main-nav").html(`
    <ul>
      <li><a href="#" data-icon="back" onclick="history.back()">Back</a></li>
      <li><a href="index.html">Home</a></li>
      <li><a href="local.html">Local</a></li>
      <li><a href="recipes.html">Recipes</a></li>
      <li><a href="DIY.html">DIY</a></li>
      <li><a href="travel.html">Travel</a></li>
      <li><a href="about.html">About</a></li>
	  <li><a href="input.html">User Additions</a></li>
    </ul>
  `);

  const panel = document.getElementById('contactPanel');
  const openBtn = document.getElementById('openContactBtn');
  const closeBtn = document.getElementById('closePanelBtn');
 
	if (panel && openBtn && closeBtn) {
	    openBtn.onclick = () => {
	      panel.classList.add('open');
	      openBtn.style.display = 'none'; // hide the floating button
	    };
	    closeBtn.onclick = () => {
	      panel.classList.remove('open');
	      openBtn.style.display = 'block'; // show the button again
	    };
	  }



  // Footer
  
  $(".site-footer").html(`
    <p>&copy; <span id="year"></span> Wrangling the Robertson's Reviews. All rights reserved.</p>
    <div class="social-icons">
      <a href="https://www.facebook.com/Wranglingtherobertsons" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/wranglingtherobertsons" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/@wranglingtherobertsons8364" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="mailto:wranglingtherobertsons@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
    </div>
  `);
  $("#year").text(new Date().getFullYear());

  // Favorites 
  
  const defaultLists = ["Travel", "Recipes", "DIY", "Local"];
  let currentList;

  function initDefaultLists() {
    const existing = localStorage.getItem("presetFavorites");
    if (existing) {
      return JSON.parse(existing);
    }
    // Create initial structure only if none exists
    const initial = {};
    defaultLists.forEach(name => initial[name] = []);
    localStorage.setItem("presetFavorites", JSON.stringify(initial));
    return initial;
  }

  function getAllLists() {
    const lists = localStorage.getItem("presetFavorites");
    return lists ? JSON.parse(lists) : initDefaultLists();
  }

  function saveAllLists(lists) {
    localStorage.setItem("presetFavorites", JSON.stringify(lists));
  }

  function displayFavorites() {
    const lists = getAllLists();
    const items = lists[currentList] || [];
    const $list = $("#favoritesList").empty();

    items.forEach((entry, index) => {
      const stars = "⭐".repeat(Math.floor(entry.rating));
      const half = (entry.rating % 1 !== 0) ? "½" : "";
      $("<li>").text(`${index + 1}. ${entry.name} (${stars}${half})`).appendTo($list);
    });

    // If using jQuery Mobile listview
    if ($list.hasClass("ui-listview")) {
      $list.listview("refresh");
    }
    $("#currentListName").text(currentList);
  }

  function addFavorite() {
    const value = $("#favoriteInput").val().trim();
    const rating = parseFloat($("#ratingSelect").val());
    if (!value) {
      alert("Please enter an item.");
      return;
    }

    const lists = getAllLists();
    // Push new item into currentList array
    lists[currentList].push({ name: value, rating: rating });
    saveAllLists(lists);

    $("#favoriteInput").val("");
    displayFavorites();
  }

  function switchList() {
    currentList = $("#listSelect").val();
    localStorage.setItem("lastList", currentList);
    displayFavorites();
  }

  // List suggestions
  
  function getSuggestions() {
    const stored = localStorage.getItem("listSuggestions");
    return stored ? JSON.parse(stored) : [];
  }

  function saveSuggestions(suggestions) {
    localStorage.setItem("listSuggestions", JSON.stringify(suggestions));
  }

  function displaySuggestions() {
    const suggestions = getSuggestions();
    const $list = $("#suggestionsList").empty();

    suggestions.forEach((s, i) => {
      $("<li>").text(`${i + 1}. ${s}`).appendTo($list);
    });

    if ($list.hasClass("ui-listview")) {
      $list.listview("refresh");
    }
  }

  function submitSuggestion() {
    const value = $("#newListSuggestion").val().trim();
    if (!value) {
      alert("Please enter a suggestion.");
      return;
    }
    const suggestions = getSuggestions();
    suggestions.push(value);
    saveSuggestions(suggestions);

    $("#newListSuggestion").val("");
    displaySuggestions();
  }

  // Current list
  
  if ($("#listSelect").length) {
    // 1. Initialize default lists if needed
    initDefaultLists();

    // 2. Determine which list to show on load
    const savedList = localStorage.getItem("lastList");
    if (savedList && defaultLists.includes(savedList)) {
      currentList = savedList;
      $("#listSelect").val(savedList);
    } else {
      currentList = $("#listSelect").val() || "Travel";
      localStorage.setItem("lastList", currentList);
    }

    // 3. Attach event handlers
    $("#listSelect").on("change", switchList);
    $("#addFavoriteBtn").on("click", addFavorite);
    $("#submitSuggestionBtn").on("click", submitSuggestion);

    // 4. Render saved items & suggestions immediately
    displayFavorites();
    displaySuggestions();
  }

 
  // Contact form
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const newEntry = {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      purpose: $("#purpose").val(),
      message: $("#message").val().trim(),
      subscribe: $("input[name='subscribe']:checked").val()
    };
    const entries = JSON.parse(localStorage.getItem("contactEntries")) || [];
    entries.push(newEntry);
    localStorage.setItem("contactEntries", JSON.stringify(entries));

    alert("Message sent successfully!");
    this.reset();
    if (panel) panel.classList.remove("open");
  });
  
  $("#filterInput").on("keyup", function () {
      const filter = $(this).val().toLowerCase();
      $("main .main-column ul li").each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(filter));
      });
	  });
  // -Onclick
  
  $("#bookLink").click(function () {
      window.open("https://sotd.us/jenniferrobertson2/M6P/public/recipes.html", "_blank");
    });
  $("#gloryLink").click(() => window.open("https://www.facebook.com/glorydaysbarbershop", "_blank"));
  $("#universalLink").click(() => window.open("https://www.universalorlando.com/web/en/us", "_blank"));

  $("#1902").click(() => window.open("images/1902.png", "_blank"));
  $("#xavImg").click(() => window.open("images/xav.png", "_blank"));
  $("#beforeImg").click(() => window.open("images/before.JPG", "_blank"));
  $("#afterImg").click(() => window.open("images/afterhall.JPG", "_blank"));

  $("#imgOne").click(() => window.open("images/1.JPG", "_blank"));
  $("#imgTwo").click(() => window.open("images/2.JPG", "_blank"));
  $("#imgThree").click(() => window.open("images/3.jpg", "_blank"));

  $("#meatloafImg").click(() => window.open("images/Meatloaf.png", "_blank"));
  $("#garlicChickenImg").click(() => window.open("images/Garlicchicken.png", "_blank"));
  $("#pizzaBurgersImg").click(() => window.open("images/Pizzaburgers.png", "_blank"));

  $("#breathImg").click(() => window.open("images/breath.png", "_blank"));
  $("#kingImg").click(() => window.open("images/king.png", "_blank"));
  $("#suvImg").click(() => window.open("images/suv.png", "_blank"));
  $("#baby").click(() => window.open("images/baby.png", "_blank"));

  $("#facebookBtn").click(() => window.open("https://www.facebook.com/Wranglingtherobertsons", "_blank"));
  $("#instagramBtn").click(() => window.open("https://www.instagram.com/wranglingtherobertsons", "_blank"));
  $("#youtubeBtn").click(() => window.open("https://www.youtube.com/@wranglingtherobertsons8364", "_blank"));
  $("#emailBtn").click(() => window.location.href = "mailto:wranglingtherobertsons@gmail.com");

  $(".nav-btn").click(function () {
    const target = $(this).data("target");
    if (target) $(target).slideToggle();
  });

  $("#scrollTop").click(() => $("html, body").animate({ scrollTop: 0 }, "slow"));
});
