var main = document.querySelector("main")
let posts = [
   {
    image: "",
    title:"",
    post:""
   },
   {
    image:"",
    title:"",
    post:""
   },
   {
    image:"",
    title:"",
    post:""
   }
];

posts.forEach((post) => {
    image.insertAdjacentHTML('afterend', '<img src="http://placehold.it/200x200"></img>');
    title.insertAdjacentHTML('afterend', "<h1>blog</h1>");
    post.insertAdjacentHTML('afterend', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat suscipit sem id tincidunt. Quisque pulvinar est vitae turpis sodales, quis finibus ligula eleifend. Nam velit libero, tincidunt nec ex ac, interdum congue lacus. Phasellus sit amet scelerisque erat. Pellentesque at tincidunt metus, vel consequat mauris.</p>");
});
