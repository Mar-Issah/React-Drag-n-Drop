import React from "react";
import UseDropPicture from "./UseDropPicture";

///anyting draggable needs the useDrop hook to fxn so create the hook fxn in a file seperatly and apply to each of the draggable element

//the id is important for unique identification
const PictureList = [
	{
		id: 1,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1603986207/sample.jpg",
	},
	{
		id: 2,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1604688097/form-background_otldij.jpg",
	},
	{
		id: 3,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909224/barbados_otkuqd.webp",
	},
];

//wrappped in a fragment because we are nesting several divs

//we return the image in the usedrop component to be able to make each draggable

//we pass in the id for unique identification and url as props because we are creating a picture and we need the url as img src
const DragnDrop = () => {
	return (
		<>
			<div className="image">
				{PictureList.map((picture) => {
					return <UseDropPicture url={picture.url} id={picture.id} />;
				})}
			</div>
		</>
	);
};

export default DragnDrop;
