export const shortUrl = async (url) => {
    
    const res = await fetch("http://127.0.0.1:8000/api/shorten", {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    },
  }
);

const data = await res.json();
console.log(res)
return data.shortUrl;
}