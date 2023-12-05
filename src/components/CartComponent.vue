<template>
	<ion-page>
		<ion-content>
			<ion-item>
				<ion-label>Objetos en el carrito</ion-label>
			</ion-item>
			<ion-grid>
				<ion-row>
					<ion-col size="4" class="cart-list">
						<ion-list>
							<ion-item v-for="i in cart_counter" :key="i">
								<ion-label>producto {{100}}$</ion-label>
								<ion-button @click="$emit('remove_from_cart');" size="small" color="danger">Retirar</ion-button>
							</ion-item>
						</ion-list>
					</ion-col>
					<ion-col size="8">
						<!-- Contenido principal de la página -->
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-label>
			</ion-label>
			<ion-button @click="checkout()" class="checkout-button" v-if="cart_counter > 0">
				Realizar compra {{cart_counter * 100}}$
			</ion-button>
			<ion-title v-if="cart_counter == 0 && message == ''">
				El carrito esta vacío.
			</ion-title>
			<ion-title v-if="message" color="success">
				¡Compra exitosa!
			</ion-title>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import cart from '@/pages_resources/CartComponent/cart';
	export default{
		extends: cart,
	};
</script>

<style scoped>
	@import "@/pages_resources/CartComponent/cart.css"
</style>
