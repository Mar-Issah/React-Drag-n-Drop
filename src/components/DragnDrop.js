import React, { useState } from "react";
import UseDropPicture from "./UseDropPicture";
import { useDrop } from "react-dnd";

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

//BOARD
//The board is the area we want to drop our images

//just like the useDrag hook for dragging we have useDrop hook fpr dropping the elements see implementation beloew

//USEDROP
//accept: what kind of images are we accepting ie image. In the useDrag it was type

//drop: a fxn that is called whenevr you drop an item in this case we want to add the image to the board. the addImageToBoard

//addImageToBoard which takes id the id we created  this will compare the id to see if it is the same as the drag id and drop id. we are only indentifying which image we are dragging or dropping

// collect: this fxn is optional. But if you need to access the isOver state then you have to implement the collect fxn is use the isOver...realized that !!monitor.isOver(), activates the the isOver

//
const DragnDrop = () => {
	const [board, setBoard] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item) => addImageToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));
	const addImageToBoard = (id) => {
		const pictureList = PictureList.filter((picture) => id === picture.id);
		setBoard((board) => [...board, pictureList[0]]);
	};
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
