<template>
	<ion-page>
		<ion-content class="main_content">
			<ion-toolbar class="main_toolbar">
				<ion-button class="toolbar_button" color="button" @click="items=paper">
					Papel
				</ion-button>
				<ion-button class="toolbar_button" color="button" @click="items=printer">
					Impresoras
				</ion-button>
				<ion-button class="toolbar_button" color="button" @click="items=ink">
					Tinta
				</ion-button>
			</ion-toolbar>
			<ion-list v-for="(item, index) in items" :key="index" class="main_list">
				<ion-card class="card" @click="handleCardClick()">
					<ion-card-title>
						{{item[0]}}
					</ion-card-title>
					<div class="card_content">
						<ion-img :src="item[2]" class="img"/>
						<ion-card-subtitle style="margin: 50px; font-size: 24px">
							{{item[1]}}
						</ion-card-subtitle>
					</div>
				</ion-card>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import products from "@/pages_resources/ProductsComponent/products";
	export default{
		extends: products,
	};
</script>

<style scoped>
	@import "@/pages_resources/ProductsComponent/products.css"
</style>
