NewNStuff Project
=================

My app allows users to search for top headline news between the categories sports, entertainment, and technology. It displays the content in multiple pages and gives basic information about each article, such as the name, author, and a description.


Project Components
------------

### ← README.md

That's this file, where you can tell people what your cool website does and how you built it.

### ← news.html

The first component of my page is a navbar. This was a basic creative aspect of my page that i incorporated to make the page more professional. It consists of the apps name, NewsNStuff, and a free icon that i found online of a person reading a newspaper. It was made using the navbar format in bootstrap. For my dropdown menu, I chose to use that format, rather than, for example, a check off form, because, similar to the navbar, I was looking to make my project more professional visually. I also contemplated whether I should add in a text input box so that users could specify what type of news they would like to see, but since top headlines only returns 70 headlines per category, I wanted to ensure that users would be able to have many articles to look at and use the other features that i added.

### ← news.js

The first major choice that I made in this section was to make functions for every single topic, even though each function effectively contained the same code. Initially, I had wanted to create certain attributes for each topic, such as a banner that contained an image of the category or a specific background color related to the categories, but due to initial problems that took longer than expected to fix and the difficulty of making progress during the election season, I was unable to implement those specifications, although those modifications are certainly still things I would like to do to improve the project. I initially wanted to use everything rather than top headlines for my data but i ran into many issues with my code being unable to find data after a certain index, even with a large pageSize, so i decided that top headlines would be better to avoid error and also provide more relevant news. I made the choice of dividing the news into pages of 20 because it personally felt overwhelming scrolling down through so much news. I believe that my choice to divide up the articles into different pages prevents this overwhelming feeling and also allows for more for more concentration on the article descriptions since one doesnt feel compelled to get through the entire set of articles before making a choice of what to read (which might sound weird but is certainly something taht i noticed myself doing initially while playing with the early version of the app). I was unable to completely finish everything that I wanted in this app, but some ideas that I initially had was a button for each article that would save article data (which would ideally add to/replace the default page), the ability for users to customize their background, and a search form that would allow users to search for specific information, such as word in the title or the author. 


Made using HTML, Javascript, and Bootstrap library
-------------------
