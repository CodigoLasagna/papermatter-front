<template>
	<ion-page>
		<ion-content class="main_content">
			<ion-item>
				<ion-title>
					Pedidos realizados:
					{{orders}}
				</ion-title>
			</ion-item>
			<ion-list class="list">
				<ion-item v-for="i in orders" :key="i" class="list_item">
					<ion-card class="list_card">
						<ion-card-title style="margin: 10px">
							Pedido [{{i}}]
						</ion-card-title>
						<ion-card-subtitle style="margin: 10px">
							realizado en: 2023-12-05
						</ion-card-subtitle>
					</ion-card>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>


<script lang="ts">
	import order from "@/pages_resources/OrdersComponent/order";
	export default{
		extends: order,
	};
</script>

<style scoped>
	@import "@/pages_resources/OrdersComponent/order.css"
</style>
