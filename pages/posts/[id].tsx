import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: any) {
  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
