window.addEventListener("load", function () {
  const search_button = document.getElementById("id_search_naver_map");
  if (search_button) {
    search_button.addEventListener("click", function (event) {
      const input_address = document.getElementById("id_address").value;
      if (input_address) {
        getLocation(input_address);
      }
    });
  }
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const getLocation = (input_address) => {
  fetch("/getLocation/", {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body: JSON.stringify({ address: input_address }),
  })
    .then((response) => {
      console.log(input_address);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length !== 0) {
        document.getElementById("id_latitude").value = data[0];
        document.getElementById("id_longditude").value = data[1];
      } else {
        document.getElementById("id_latitude").value = "";
        document.getElementById("id_longditude").value = "";
      }
    });
};
