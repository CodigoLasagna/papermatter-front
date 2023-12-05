// cart.ts
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonImg} from '@ionic/vue';

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
	},
	props:
	{
		cart_counter: Number,
	},
	mounted()
	{
		console.log('cart module loaded')
		this.message = ''
	},
	data() {
		return {
			total: 0,
			message: '',
		}
	},
	methods: {
		checkout()
		{
			this.$emit('clean_cart')
			this.$emit('increase_orders')
			this.message = "Compra realizada"
		}
	},
};
