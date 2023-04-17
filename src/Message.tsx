interface UserMessage {
	name: string;
	message: string;
}

export default function Message(props: UserMessage) {
	return (
		<p>
			{props.name}, {props.message}
		</p>
	);
}
