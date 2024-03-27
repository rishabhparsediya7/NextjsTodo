'use client'
import React, { useState } from 'react'

function Form({ items, setList }: { items: string[], setList: React.Dispatch<React.SetStateAction<string[]>> }) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedList = [...items, name];
        setList(updatedList)
    }
    return (
        <form onSubmit={(e) => handleForm(e)} className="flex flex-col space-y-4">
            <div className="mb-2 flex flex-col">
                <label htmlFor="todoname">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700  p-2 hover:border-indigo-400 outline-none focus:border-indigo-400 rounded-md" placeholder="Enter todo heading" />
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="tododescription">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-700  p-2 hover:border-indigo-400 outline-none focus:border-indigo-400 rounded-md" placeholder="Enter todo Description"
                />
            </div>
            <div className="mb-2">
                <p className="text-right text-indigo-600">Enoying?</p>
            </div>
            <div className="">
                <button type='submit' className="w-full rounded-md p-2 uppercase tracking-wider bg-indigo-900">Submit Todo</button>
            </div>
        </form>
    )
}

export default Form
