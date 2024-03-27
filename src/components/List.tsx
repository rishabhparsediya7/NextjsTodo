export default function List({ items, setList }: { items: string[], setList: React.Dispatch<React.SetStateAction<string[]>> }) {
    const handleDelete = (item: string) => {
        const updatedItems = items.filter((i) => i !== item)
        setList(updatedItems)
    }
    return (
        <ul>
            {items.map((item: string, index: number) => (
                <li className="bg-gray-700/30 flex justify-between rounded-md mb-2 p-2 capitalize border-[0.01rem] border-transparent hover:border-blue-900 items-center" key={index}>
                    <div>{item}</div>
                    <div className="flex gap-2">
                        <button onClick={() => handleDelete(item)} className="bg-red-600 p-2 min-w-16 rounded-md border-[0.01rem] border-transparent hover:border-white">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}