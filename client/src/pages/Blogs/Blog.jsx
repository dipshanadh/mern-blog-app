// Compoennts
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BlogContent from "./BlogContent"

const Blog = () => {
	const blog = {
		title: "Welcome to Dipshan's amazing blog | Dipshan's blog",
		author: "Dipshan Adhikari",
		content: `
Hello guys, this is a simple blog web app made which supports markdown. 
This blog is made using
React.js in the frontend and Node, Express, and
MongoDB in the backend (MERN stack). I have used
tailwindCSS. I am not a big fan of UI libraries like
Bootstrap or Material UI. I prefer to use
TailwindCSS, because I have much more control over
the styling. TailwindCSS makes it easy and quick to
style your website.

This is writtend in markdown, but is parsed to HTML.
In this blog, I am going to give a little demo of this blog application.

# Heading level 1 
## Heading level 2	
### Heading level 3	
#### Heading level 4	
##### Heading level 5	

**This is a bold text**

This is ~~not~~ a strikethrough.

*This is an italicized text*

This text is ***bold with italic***.

### Lists
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

### Blockquote
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed wood.

### Horizontal rule
---

### Link
[This is a link](https://www.dipshanadhikari.com.np)

### Table
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

### Code
    <html>
        <body>
            <h1>Hello world !
        </body>
    </html>

    h1 {
        color: red;
    }

    document.querySelector("h1").textContent = "Hello dear"


### Image
![Dipshan Adhikari](https://avatars.githubusercontent.com/u/76583762)


### Dipshan Adhikari
- [Facebook](https://facebook.com/dipshanadh)
- [Github](https://github.com/dipshanadh)
- [Instagram](https://instagram.com/dipshanadh)
- [Twitter](https://twitter.com/dipshanadh)
- [Linkedin](https://linkedin.com/dipshanadh)
`,
	}

	const readingTime = Math.ceil(blog.content.split(" ").length / 250)

	document.title = blog.title

	return (
		<>
			<Navbar />
			<main className="mt-[71px] p-10 bg-gray-100">
				<div className="max-w-3xl mx-auto">
					<header>
						<h1 className="text-3xl font-semibold md:text-4xl text-center sm:text-left">
							Welcome to Dipshan's amazing blog
						</h1>

						<div className="text-lg flex items-center sm:gap-[1ch] mt-4 flex-col sm:flex-row">
							<p className="flex items-center flex-col sm:flex-row">
								<img
									src="https://avatars.githubusercontent.com/u/76583762?v=4"
									alt="dipshan adhikari"
									className="w-8 h-8 rounded-full mr-2"
								/>
								<span>Dipshan Adhikari</span>
							</p>
							<p>
								<span className="text-lg font-extrabold mr-[1ch] hidden sm:inline">
									·
								</span>
								Posted on April 24, 2022
							</p>
							<p className="flex items-center">
								<span className="text-lg font-extrabold hidden sm:inline">
									·
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 inline ml-[1ch] mr-[0.7ch]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
								{readingTime} min read
							</p>
						</div>
					</header>

					<BlogContent content={blog.content} />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blog
