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
