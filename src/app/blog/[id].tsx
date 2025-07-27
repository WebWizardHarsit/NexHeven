import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import blogData from "@/components/Blog/blogData";
import { Blog } from "@/types/blog";

// Define params interface
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogData.map((blog) => ({
    params: { id: blog.id.toString() }, // Convert number to string
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { blog: Blog | null },
  Params
> = async ({ params }) => {
  const id = parseInt(params!.id, 10); // Convert string to number
  const blog = blogData.find((item) => item.id === id) || null;

  return {
    props: {
      blog,
    },
  };
};
