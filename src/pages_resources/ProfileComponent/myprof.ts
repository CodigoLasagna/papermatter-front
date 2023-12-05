// prof.ts
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonImg, IonInput} from '@ionic/vue';

export default {
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonButton,
		IonModal,
		IonImg,
		IonInput,
	},
	props:
	{
		username: String
	},
	mounted()
	{
	},
	data() {
		return {
			account: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
			date: 'aaaa',
			ccv: 420
		}
	},
	methods: {
	},
};
