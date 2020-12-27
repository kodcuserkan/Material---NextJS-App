// import React from 'react'
import Layout from "../components/layout";
export default function Hi({ name }) {
  return (
    <Layout title="Hi page">
      <pre>{`This is hi page with response: ${name}`} </pre>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch("http://localhost:3000/api/hello");
  const name = await resp.json();
  return {
    props: name,
  };
}
