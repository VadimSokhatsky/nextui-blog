'use client';

import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "next/navigation";

import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Spinner} from "@nextui-org/spinner";

import CardComponent from "@/components/card";

export default function BlogPage() {

  const [post, setPost] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const post = res?.data?.find( (p: any) => p.id.toString() === params.post );
    if (post) setPost(post);
    setLoading(false);
  }

  return (
    <article className="w-full h-full flex flex-col gap-4 p-4">
      <Link href="/"><Button className="w-fit">Go Home</Button></Link>
      {loading && <Spinner className="m-auto" />}
      {post && <CardComponent post={post} isPreview={false} />}
    </article>
  );
}
