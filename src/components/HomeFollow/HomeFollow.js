import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Divider } from '@mui/material';
const FollowUS = [
    {
        imgSrc: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
        name: 'Follow 1',
    },

    {
        imgSrc: 'https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D',
        name: 'Follow 2',
    },

    {
        imgSrc: 'https://media.istockphoto.com/id/108125029/photo/mountain-landscapes.jpg?s=612x612&w=0&k=20&c=EbVDBkeFtgAxDRbR8SQ6mf4P9fkVCHoeGUxO3VdJ3zo=',
        name: 'Follow 3',
    },

    {
        imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
        name: 'Follow 4',
    },

    {
        imgSrc: 'https://i.pinimg.com/564x/58/16/1c/58161caa9a4dba3ae039c25bc57508fe.jpg',
        name: 'Follow 5',
    },

    {
        imgSrc: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/the-blue-border-kilian-schonberger-4.jpg',
        name: 'Follow 6',
    },
    {
        imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
        name: 'Follow 7',
    },
    {
        imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
        name: 'Follow 8',
    },
];
function HomeFollow() {
    return (
        <div>
            <div className="mt-8 ml-8 mr-8">
                <div className="text-center mb-4">
                    Follow Our Instagram{' '}
                    <span className="text-[#748f76] hover:underline ">
                        <a href="https://www.instagram.com/ryan_.p._1410/" target="_blank">
                            @ryan_.p._1410
                        </a>
                    </span>
                </div>
                <div className="grid grid-cols-4 relative mx-16">
                    {FollowUS.map((img, index) => (
                        <a
                            key={index}
                            href="https://www.instagram.com/ryan_.p._1410/"
                            target="_blank"
                            className="relative"
                        >
                            <img
                                src={img.imgSrc}
                                alt={img.name}
                                className="w-full h-[200px] object-cover "
                            />
                            <div className="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                <FaInstagram className="text-white text-4xl" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Divider />
        </div>
    );
}

export default HomeFollow;
