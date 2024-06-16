import React from "react";
import "../styles/Homepage.css"
const blogs = [
  {
    title: "Striking Out on Your Own ",
    summary: "Adulting is hard. Sometimes it means moving back in with your parents till you find your feet. At other times, it means moving to a new city, new job or new relationships.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*PaHM4jkFsAS9gTtA",
    link: "https://medium.com/@ravali.k/striking-out-on-your-own-46965c844a2e"
  },
  {
    title: "Making Life Choices",
    summary: "At around 12 years old, most of us the world over start to make choices that impact our whole lives.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*hRvxBkBayWjgRQ7F",
    link: "https://medium.com/@ravali.k/making-life-choices-30c4560a0ca6"
  },
  {
    title: "Reflecting on our Core Desires",
    summary: "There is nothing wrong with desiring something quite strongly. The only issue is trying to bend others to your desires or will.",
    imageUrl: "https://i0.wp.com/www.mindfulnessmuse.com/wp-content/uploads/2012/05/16-Universal-Human-Desires-What-Motivates-You.jpg?fit=640%2C346&ssl=1",
    link:"https://medium.com/@ravali.k/reflecting-on-our-core-desires-babdd9473a2f"
  },
  {
    title: "Having a Hobby",
    summary: "Every single day, what constitutes work or livelihood is changing. You could be earning passive income from a social media account, or you could be working a traditional 9-to-5 job.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*RBOVoIFxGfZ13A-a",
    link: "https://medium.com/@ravali.k/having-a-hobby-22db77fde655"
  },
  {
    title: "Procrastination and Us",
    summary: "It’s easy to make plans for days on end but its very, very difficult to act on them. If I had to guess, I’d say that it’s the same for everyone",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Sm005YtTG2FEXEVk",
    link: "https://medium.com/@ravali.k/procrastination-and-us-93bbd019a64f"
  },
  {
    title: "Getting through the Workday",
    summary: "Not everyone will be working jobs that they like, all the time. If you find yourself in a job you like, thank your lucky stars and enjoy your day.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*IyrStnffDZwxl3CN",
    link: "https://medium.com/@ravali.k/getting-through-the-workday-2fe43eae0221"
  },
  {
    title: "Lowering Stress Levels",
    summary: "I am was one of those kids that couldn’t think of exams without feeling fully consumed by the need to do well in them.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*bIWQLQNtuwxiautq",
    link: "https://medium.com/@ravali.k/lowering-stress-levels-ea9e5415d9de"
  },
  {
    title: "Art in the Times of AI",
    summary: "I think AI is here to stay. To me, that just means that it will become a way of doing things rather than it being an end in itself.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*hRvxBkBayWjgRQ7F",
    link: "https://medium.com/@ravali.k/art-in-the-times-of-ai-3118ae59e459"
  },
  {
    title:"Everything is Alright",
    summary:"Actually, that’s not true — somethings might even be great. And we’ll get there too.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*IyrStnffDZwxl3CN",
    link:"https://medium.com/@ravali.k/everything-is-alright-2a32ee54ecb5"
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-summary">{blog.summary}</p>
            <a href={blog.link} className="read-more">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
