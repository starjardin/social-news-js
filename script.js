//Created an array of an object to store the existing links
const links = [
  {
    title: "Madagascar news",
    url: `"htpp://news-madagascar.com"`,
    author: "HoneyMoon",
  },
  {
    title: "African news",
    url: `"htpp://news-african.com"`,
    author: "HoneyMoon",
  },
  {
    title: "American news",
    url: `"htpp://news-american.com"`,
    author: "HoneyMoon",
  },
];

//A function to display the existing links, will need it for later.
const linkList = () => {
  for (let i = 0; i < links.length; i++) {
    let myLink = `Title: ${links[i].title}
Url: ${links[i].url}
Author: ${links[i].author}`;
    alert(myLink)
  }
};

//A function to allow the user to enter their news. We'll call it later.
const addNweLink = () => {
  const linkTitle = prompt("Enter here your link title");
  const linkAuthor = prompt("Enter here your link Author");
  const linkUrl = prompt("Enter here your link url");
  let news = {
    title: linkTitle ,
    author : linkAuthor,
    url : linkUrl
  };
  if (url.startsWith !== '"http' && url.endsWith !== '://') {
      news.url.push(`"http://" ${linkUrl}`)
  };
  links.push(news)
  return;
}

const deletedNews = () => {
  let indexNewsToDelete = Number(prompt("Enter here the rank of the news you want to delete"));
  let deletedOneNews = links.splice(indexNewsToDelete - 1, 1);
  alert(`we have deleted the news titled: ${deletedOneNews[0].title}`)
}

const startMenuString = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit`

let menuStart = Number(prompt(startMenuString));
//while loop to allow the user to read or enter new news.
while(menuStart !== 0) {
  //if the user enter "1" it will display the existing news(we are calling function here)
  if (menuStart === 1) {
    linkList();
  //if the user enter "2" it will allow them to enter new news(we're calling function here)  
  } else if (menuStart === 2) {
    addNweLink();
  //if the user enter "3" it will allow the user to delete news form the existing news.(we're calling function here)  
  } else if (menuStart === 3) {
    deletedNews();
  //if none of the above it will ask them again to enter a new number.  
  } else {
    alert("Sorry not found, please try again with a number between 0 to 4");
  }
  menuStart = Number(prompt(startMenuString));
}
//If the user enter 0, end of the program.
alert("Good bye");