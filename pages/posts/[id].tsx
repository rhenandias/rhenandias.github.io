import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: any) {
  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
