// home.ts
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
	mounted()
	{
		console.log('home module loaded')
	},
	data() {
		return {
			images:
			[
				'https://cyr-sas.com/wp-content/uploads/2023/01/RESMA-DE-PAPEL-TAMANO-CARTA.png',
				'https://mediaserver.goepson.com/ImConvServlet/imconv/32c29f9d0b3bdd0291a47d17830f0681ef33be7b/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=20Lio2_MBL_blk_02',
				'https://cartuchostodos.com.ar/wp-content/uploads/2018/03/impresora-y-tinta.png',
			],
			titles:
			[
				'Papel',
				'Impresoras',
				'Tinta'
			]
		}
	},
	methods: {
	},
};
