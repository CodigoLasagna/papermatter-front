<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>papermatter.com</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-toolbar class="main-toolbar">
			<ion-button  @click="main_view = 1" color="button">
				home
			</ion-button>
			<ion-button  @click="main_view = 2" color="button">
				productos
			</ion-button>
			<ion-button @click="main_view = 3" slot="end" v-if="!logged_in" color="button">
				iniciar sesión
			</ion-button>
			<ion-button @click="main_view = 6" slot="end" v-if="logged_in" color="button">
				perfil: {{username}}
			</ion-button>
			<ion-button @click="main_view = 5" slot="end" v-if="logged_in" color="button">
				pedidos
			</ion-button>
			<ion-button @click="main_view = 4" slot="end" v-if="logged_in" color="button">
				carrito <span v-if="items_in_cart > 0">[{{items_in_cart}}]</span>
			</ion-button>
		</ion-toolbar>
		<ion-content>
			<HomeComponent v-if="main_view===1"/>
			<ProductsComponent v-if="main_view===2" @increase_counter="items_in_cart += 1" @move_to_login="main_view = 3" :IsLogged="logged_in"/>
			<LoginComponent @logged="logged_in = true; main_view = 1; username = $event" v-if="main_view===3"/>
			<CartComponent v-if="main_view == 4" :cart_counter="items_in_cart" @remove_from_cart="items_in_cart -= 1" @clean_cart="items_in_cart = 0" @increase_orders="orders +=1"/>
			<OrdersComponent v-if="main_view == 5" :orders="orders"/>
			<ProfileComponent v-if="main_view == 6" :username="username"/>
		</ion-content>
		<ion-footer>
			papermatter 2024©;
		</ion-footer>
	</ion-page>
</template>

<script lang="ts">
	import main from '@/pages_resources/HomePage/MainPage';
	export default{
		extends: main,
	};
</script>

<style scoped>
	@import "@/pages_resources/HomePage/MainPage.css"
</style>
