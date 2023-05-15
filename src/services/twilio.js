import twilio from "twilio";
import { config } from "dotenv";

config();

const sendMessage = async () => {
    try {
        const accountSid = process.env.ACCOUNT_TWILIO;
        const authToken = process.env.AUTHTOKEN_TWILIO;
        const client = twilio(accountSid, authToken);

        const options = {
            body: "Su pedido ha sido recibido y se encuentra en proceso",
            from: "whatsapp:+12707361214",
            to: `whatsapp:${WSP_TWILIO}`,
        };
        const message = await client.messages.create(options);

        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

export default sendMessage;