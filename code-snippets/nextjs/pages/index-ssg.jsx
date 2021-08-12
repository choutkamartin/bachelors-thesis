export async function getStaticProps() {
  // Volání externí API
  const res = await fetch("https://.../posts");
  const data = await res.json();

  // Vrácením props můžeme ve funkci Index získat proměnnou data
  return {
    props: {
      data,
    },
  };
}

export default function Index({ data }) {
  return (
    <div>
      <h1>Úvodní stránka</h1>
      <p>Toto je text k uvodní stránce</p>
      {data}
    </div>
  );
}
