
export default async function Home() {
  const hello = await getData();
  
  return (
   <h1>{hello.hei}</h1>
  );
}

async function getData() {
  const res = await fetch("http://localhost:31337")
  const data = await res.json()

  return data
}