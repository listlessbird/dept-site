
const Eventcard = () => {
    const imageURL = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className='w-full flex flex-col gap-2 border p-4 border-black/50 md:flex-row lg:justify-between'>
            <div className="flex flex-col gap-2">
                <h1 className="font-medium text-3xl uppercase">Laser tag</h1>
                <p className="text-base lg:text-xl lg:max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus, unde sit, impedit iste temporibus asperiores neque.</p>
            </div>
            <img className="w-full md:w-48 lg:w-64 lg:h-80 object-cover" src={imageURL} alt="event-img" />
        </div>
    )
}

export default Eventcard