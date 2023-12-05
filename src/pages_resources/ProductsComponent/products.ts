// products.ts
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
		itemsInCart: Number,
		IsLogged: Boolean,
	},
	mounted()
	{
		console.log('login module loaded')
		this.items = this.paper
	},
	data() {
		return {
			paper:
			[
				// imagen precio nombre
				['HP Papel para impresora, Carta, Blanco', '1,050$', 'https://m.media-amazon.com/images/I/81OhLlQCkrL._AC_SL1500_.jpg'],
				['Papel de impresora HP | 8,5 x 11 papel', '736$', 'https://m.media-amazon.com/images/I/71cxMZaUgNL._AC_SL1500_.jpg'],
				['Kit de 3 Paquetes con 500 Hojas Carta Ecobond', '395$', 'https://m.media-amazon.com/images/I/716L7FZ3HrL._AC_SL1500_.jpg'],
				['Scribe Class Bond Dorado FSC® Papel Bond', '213$', 'https://m.media-amazon.com/images/I/81r5KT8uyhL._AC_SL1500_.jpg'],
			],
			printer:
			[
				['HP - Impresora multifuncional HP', '1,499$', 'https://m.media-amazon.com/images/I/618YwpCpkVL._AC_SL1500_.jpg'],
				['Epson Impresora Multifuncional', '3,529$', 'https://m.media-amazon.com/images/I/81e-sZ4o1aS._AC_SL1500_.jpg'],
				['Canon Multifuncional PIXMA', '2,779$', 'https://m.media-amazon.com/images/I/511zQHB5fWL._AC_SL1000_.jpg'],
				['Impresora Multifuncional HP Deskjet Plus Ink Advantage 6475', '6,590$', 'https://m.media-amazon.com/images/I/612opPy3+qL._AC_SL1500_.jpg'],
			],
			ink:
			[
				['Generico Kit 4 Tinta Universal Premium Compatible L200', '189$', 'https://m.media-amazon.com/images/I/61yDgbpDXiL._AC_SL1000_.jpg'],
				['Litro de Tinta Premium Generica Universal Compatible con EPSON, HP', '525$', 'https://m.media-amazon.com/images/I/71KXcOxJf2S._AC_SL1500_.jpg'],
				['Epson. 4 Pack Botella Tinta T544 L1110 L3110 L3150 Negro, Amarillo, Magenta, Cian 260mL Numero de Parte ', '778$', 'https://m.media-amazon.com/images/I/71bqs3Ct9ML._AC_SL1200_.jpg'],
				['Epson 4 Pack Cartuchos Tinta T504 Color Cyan, Amarillo, Magenta, Negro', '794$', 'https://m.media-amazon.com/images/I/41qM-2mnKiL._AC_.jpg'],
			],
			items: [],
		}
	},
	methods: {
		handleCardClick()
		{
			if (this.IsLogged == true)
			{
				this.$emit('increase_counter')
			}
			else
			{
				this.$emit('move_to_login')
			}
		}
	},
};
