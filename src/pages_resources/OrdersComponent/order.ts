// orders.ts
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default {
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonButton,
	},
	props:
	{
		orders: Number,
	},
	mounted()
	{
		console.log('orders odule loaded')
	},
	data() {
		return {
		}
	},
	methods: {
	},
};

