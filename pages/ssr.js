export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
  
    return { props: { post: data } };
  }
  
  export default function SSR({ post }) {
    return (
      <div>
        <h1>Server-Side Rendering Example</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
  