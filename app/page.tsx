'use client';

import {useEffect, useState} from "react";
import axios from 'axios';

import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Spinner} from "@nextui-org/spinner";

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
      {posts.map( (post) => (
          <Card className="hover:cursor-pointer hover:contrast-150 duration-500">
            <CardHeader className="flex justify-between items-center bg-cardHeader">
              <h2 className="font-bold">{post.title}</h2>
              <div className="flex gap-2 w-max bg-cardUser rounded-xl p-2">
                <span className="w-max">User {post.userId}</span>
              </div>
            </CardHeader>
            <CardBody className="bg-cardBody">
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">{post.body}</p>
            </CardBody>
          </Card>
      ) )}
    </section>
  );
}
