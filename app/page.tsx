'use client';

import {useEffect, useState} from "react";
import axios from 'axios';

import {Spinner} from "@nextui-org/spinner";
import CardComponent from "@/components/card";

export default function Home() {

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (res) setPosts(res.data);
    setLoading(false);
  }

  return (
    <section className="w-full h-full flex flex-col gap-4 p-4 box-border">
      {loading && <Spinner className="m-auto" />}
      {posts.map( (post) => <CardComponent key={'post-' + post.id} post={post} isPreview={true} /> )}
    </section>
  );
}
