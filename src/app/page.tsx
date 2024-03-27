'use client'
import Form from "@/components/Form";
import List from "@/components/List";
import { useState } from "react";

export default function Home() {
  const items: string[] = ['first item', 'second item', 'third item']
  const [list, setList] = useState<string[]>(items);
  return (
    <div className="flex">
      <div className="flex-1 max-w-[40rem] p-10">
        <Form items={list} setList={setList} />
      </div>
      <div className="flex-1 max-w-[40rem] p-10">
        <List items={list} setList={setList} />
      </div>
    </div>
  );
}
