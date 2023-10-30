
const blog_news = [
  {
    main: 'Top 10 Cutest Cat Pictures of All Time + Honorable Mentions',
    link: 'https://pethelpful.com/cats/Top-10-Cutest-Cat-Photos-of-All-Time'
  },
  {
    main: '‘Belling The Cat’ – Popular Moral Story For Kids',
    link: 'https://www.firstcry.com/intelli/articles/belling-the-cat-story-with-moral-for-children/'
  },
  {
    main: 'The Cat by Banjo Paterson',
    link: 'https://americanliterature.com/author/banjo-paterson/short-story/the-cat'
  },
  {
    main: 'Moral Story – Cat and Rabbit Friends',
    link: 'https://anyaanand.com/moral-story-cat-and-rabbit-friends/'
  }
]

const news_aside = [
  {
    img: './img/news_cat_1.jpg',
    text: 'The History of the Domestic Cat',
    link: 'https://www.alleycat.org/resources/the-natural-history-of-the-cat/'
  },
  {
    img: './img/news_cat_2.jpg',
    text: 'Do We Really Know That Cats Kill By The Billions? Not So Fast',
    link: 'https://www.npr.org/sections/13.7/2013/02/03/170851048/do-we-really-know-that-cats-kill-by-the-billions-not-so-fast'
  },
  {
    img: './img/news_cat_3.jpg',
    text: 'How Much Do Cats Cost, Actually?',
    link: 'https://a-z-animals.com/blog/how-much-do-cats-cost/'
  }
]


function App() {
  return (
      <div className="container">
        <Header/>
        <Banner/>
        <Main/>
      </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="./img/logo.png" alt="" className="logo_img" />
      </a>
      <h1 className="blog_name">lovely cats</h1>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="#" className="nav_link">cat</a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">cat</a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">cat</a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">cat</a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">cat</a>
          </li>

        </ul>
      </nav>
    </header>
  )
}

function Banner() {
  return (
    <div className="banner_img">
      <h2>my cat</h2>
    </div>
  )
}

function Main() {
  return (
    <section className="main">
      <Article/>
      <Aside/>
    </section>
    
  )
}

function Article() {
  return (    
    <article className="article section_main">
      <h3 className="blog_title">Blog</h3>
      <BlogCard/>
    </article>
  )
}

function BlogCard() {
  return (
    <div className="blog_cards">
      {blog_news.map((card, i) => {
        return <BlogCardBuild item={card} key={i}/>
      })}
    </div>
  )
}

function BlogCardBuild(props) {
  const { main, link } = props.item;
  return (
    <section className="blog_card">
      <h4 className="blog_desc">{main}</h4>
      <a target="_blank" className="blog_link" href={link}></a>
    </section>
  )
}


function Aside() {
  return (    
    <aside className="aside section_main">
      <h3 className="blog_title">News</h3>
      <NewsCard/>
    </aside>
  )
}

function NewsCard() {
  return (
    <div className="news_cards">
      {news_aside.map((card, i) => {
        return <NewsCardsBuild item={card} key={i}/>
      })}
    </div>
  )
}

function NewsCardsBuild(props) {
  const { img, text, link } = props.item;
  return (
    <section className="news_card">
      <img src={img} alt="" />
      <h5 className="news_card-desc">{text}</h5>
      <a className="blog_link" target="_blank" href={link}></a>
    </section>
  )
}

const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);
app.render(React.createElement(App))