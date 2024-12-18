async function createBlog() {
  let userId = document.getElementById("userId").value;
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  let payload = {
    userId: userId,
    title: title,
    body: body,
  };

  console.log(payload);

  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify(payload),
  });

  let responseJson = await response.status;
  if (responseJson == 201) {
    alert("Blog Created Successfully");
  } else {
    alert("Some error occurred");
  }
  toggleForm();
}

async function getAllBlogs() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let httpResponse = await fetch(url);
  let response = await httpResponse.json();

  let container = document.getElementById("container");

  //   for (let i = 0; i < response.length; i++) {
  //     console.log(response[i].title);
  //     console.log(response[i].body);
  //   }

  for (blogPost in response) {
    let title = response[blogPost].title;
    let body = response[blogPost].body;
    let id = response[blogPost].id;
    let template = `
          <div class="blog-content-container">
              <div>
                  <h3>${title}</h3>
              </div>
              <div>
                  <img src="https://picsum.photos/seed/${id}/300" class="blog-img">
              </div>
              <div>
                  <p>
                      ${body}
                  </p>
              </div>

          </div>
    `;
    container.innerHTML += template;
  }
}

function toggleForm() {
  createBlogForm = document.getElementById("create-blog-container");
  if (createBlogForm.classList.contains("display-none")) {
    createBlogForm.classList.remove("display-none");
    createBlogForm.classList.add("display-block");
  } else {
    createBlogForm.classList.remove("display-block");
    createBlogForm.classList.add("display-none");
  }
}
