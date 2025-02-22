```javascript
// pages/about.js
export default function About() {
  return (
    <img src="/images/my-image.jpg" alt="My Image" onError={(e)=>{e.target.style.display="none";}} />
  );
}
```