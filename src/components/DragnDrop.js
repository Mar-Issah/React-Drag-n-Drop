import React from "react";

///anyting draggable needs the useDrop hook to fxn so create the hook fxn in a file seperatly and apply to each of the draggable element
const PictureList = [
	{
		id: 1,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1603986207/sample.jpg",
	},
	{
		id: 2,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1608394828/mycar_nt9da2.jpg",
	},
	{
		id: 3,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909224/barbados_otkuqd.webp",
	},
];

//wrappped in a fragment because we are nesting several divs
const DragnDrop = () => {
	return <></>;
};

export default DragnDrop;
