import blogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogData.find((item) => item.id.toString() === params.id);

  if (!blog) return notFound();

  return (
    <div className="dark:bg-bg-color-dark min-h-screen bg-white p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold">{blog.title}</h1>
        <p className="mb-4 text-gray-600">{blog.paragraph}</p>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="mb-6 rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

// ✅ REQUIRED for dynamic route: [id]
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}
