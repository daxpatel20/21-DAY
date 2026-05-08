const blogs = [
  {
    title: "Learn JavaScript Easily",
    description:"JavaScript is one of the most popular programming languages for web development.",
    author: "dax",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },

  {
    title: "Master CSS Flexbox",
    description:"Flexbox helps create responsive layouts easily and efficiently.",
    author: "krish",
    image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },

  {
    title: "HTML Semantic Tags",
    description:"Semantic HTML improves accessibility and SEO of websites.",
    author: "hemil",
    image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },

  {
    title: "Responsive Web Design",
    description: "Learn how to build websites that work perfectly on all devices.",
    author: "jenish",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];

const blogContainer = document.getElementById("blogContainer");

blogs.forEach((blog) => {
  blogContainer.innerHTML += `
  
    <div class="blog-card">
      <img src="${blog.image}" alt="${blog.title}">
      
      <div class="blog-content">
        <h2>${blog.title}</h2>
        
        <p>${blog.description}</p>

        <div class="blog-footer">
          <span class="author">${blog.author}</span>

          <button class="read-btn">Read More</button>
        </div>
      </div>

    </div>
  `;
});