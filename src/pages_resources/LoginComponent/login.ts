// login.ts
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
	mounted()
	{
		console.log('login module loaded')
	},
	data() {
		return {
			email: '',
		}
	},
	methods: {
		now_logged()
		{
			this.$emit('logged', this.email)
		},
	},
};
