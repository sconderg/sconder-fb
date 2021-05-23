import {SearchIcon} from '@heroicons/react/outline';
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    {src: "https://links.papareact.com/f0p", name:"Jeff Bezoz"},
    {src: "https://links.papareact.com/kxk", name:"Elon Musk"},
    {src: "https://links.papareact.com/zvy", name:"Bill Gates"},
    {src: "https://links.papareact.com/snf", name:"Mark Zuckerberg"},
    {src: "https://links.papareact.com/d0c", name:"Harry Potter"},
    {src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5aeccdd3a7ea436b547c4ca3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1718%26cropX2%3D4079%26cropY1%3D304%26cropY2%3D2667", name:"Abdel Fattah"},
    {src: "https://links.papareact.com/r57", name:"James Bond"},
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                        <VideoCameraIcon className="h-6" />
                        <SearchIcon className="h-6" />
                        <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets;
