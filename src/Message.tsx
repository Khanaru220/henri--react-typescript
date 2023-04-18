interface UserMessage {
	name: string;
	message: string;
}

let mySearch = function (k: string, r: number): boolean {
	return true;
};

mySearch('a', 's');

export default function Message(props: UserMessage) {
	return (
		<p>
			{props.name}, {props.message}
		</p>
	);
}
