export const metadata = {
  title: "About page",
};

export default function About() {
  return <h1>About me {new Date().toLocaleTimeString()}</h1>;
}
