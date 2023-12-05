// main.ts
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonImg} from '@ionic/vue';
import HomeComponent from "@/components/HomeComponent.vue"
import ProductsComponent from "@/components/ProductsComponent.vue"
import LoginComponent from "@/components/LoginComponent.vue"
import CartComponent from "@/components/CartComponent.vue"
import OrdersComponent from "@/components/OrdersComponent.vue"
import ProfileComponent from "@/components/ProfileComponent.vue"

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
		HomeComponent,
		ProductsComponent,
		LoginComponent,
		CartComponent,
		OrdersComponent,
		ProfileComponent,
	},
	mounted()
	{
		console.log('mainPageTS loaded')
	},
	data() {
		return {
			main_view: 1,
			items_in_cart: 0,
			logged_in: false,
			username: '',
			orders: 0,
		}
	},
	methods: {
		test()
		{
			console.log(this.home_modal);
		},
		event()
		{
			console.log('response')
		},
	},
};
