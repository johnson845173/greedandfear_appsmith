export default {
	myVar1: [],
	myVar2: {},
	async send_message (message) {
		fetch("https://api.telegram.org/bot6236663076:AAGct2VT2I3j9rsY9ja-KANqJbbSLhEHWB0/sendPhoto", {
			method: "POST",
			body: JSON.stringify({
				chat_id: "@weather845173",
				photo:"https://www.dropbox.com/s/al5j70vqp0u577f/20221001_210356.jpg?dl=1",
			}),
			headers: {
				"Content-type": "image/jpeg;",
				"Content-Length": 97
			}
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
		return 0;
	},
	async create_message (status) {
		var message_to_sent = ''
		if (status == 0){
			message_to_sent = ''
			{{JSObject1.send_message(message_to_sent)}};
		}
		else{
			message_to_sent = 'A new Stock is released';
			{{JSObject1.send_message(message_to_sent)}};
		}


		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		return 0;
	}
}