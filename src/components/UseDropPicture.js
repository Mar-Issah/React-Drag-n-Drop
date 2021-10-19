import React from "react";
import { useDrag } from "react-dnd";

//the useDrag hook is important for element that you need to drag you have to call this hook

//first is the isDraging which return true or false if your are dragging or not

//for drag is use to ref/reference the elemnet you want to make draggable
//it reutrns an object
//type:  every element has a type could be a string to identify the type we are working with for this is image/picture

//item: unique indefier for each item

// collect: this fxn is optional. But if you need to access the isDragging state then you have to implement the collect fxn is use the isDragging...realized that !!monitor.isDragging(), activates the the isDragging

//LOGIC FOR THE STYLES
//if is dragiing which is true then add some border if not remove border
const UseDropPicture = ({ id, url }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<img
			ref={drag}
			src={url}
			width="150px"
			style={{ border: isDragging ? "5px solid red" : "0px" }}
			alt="my pic"
		/>
	);
};

export default UseDropPicture;
