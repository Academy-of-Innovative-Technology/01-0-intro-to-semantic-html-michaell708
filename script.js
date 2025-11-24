var main = document.querySelector("main")
let posts = [
   {
    image: "http://placehold.it/200x200",
    title:"blog1",
    post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat suscipit sem id tincidunt. Quisque pulvinar est vitae turpis sodales, quis finibus ligula eleifend. Nam velit libero, tincidunt nec ex ac, interdum congue lacus. Phasellus sit amet scelerisque erat. Pellentesque at tincidunt metus, vel consequat mauris."
   },
   {
    image:"http://placehold.it/200x200",
    title:"blog2",
    post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat suscipit sem id tincidunt. Quisque pulvinar est vitae turpis sodales, quis finibus ligula eleifend. Nam velit libero, tincidunt nec ex ac, interdum congue lacus. Phasellus sit amet scelerisque erat. Pellentesque at tincidunt metus, vel consequat mauris."
   },
   {
    image:"http://placehold.it/200x200",
    title:"blog3",
    post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat suscipit sem id tincidunt. Quisque pulvinar est vitae turpis sodales, quis finibus ligula eleifend. Nam velit libero, tincidunt nec ex ac, interdum congue lacus. Phasellus sit amet scelerisque erat. Pellentesque at tincidunt metus, vel consequat mauris."
   }
];

posts.forEach((post) => {

    var html = `
        <img src="${ post.image }">
        <h1>${ post.title }</h1>
        <p>${ post.post }</p>
    `;


    main.insertAdjacentHTML('afterend', html);

});
